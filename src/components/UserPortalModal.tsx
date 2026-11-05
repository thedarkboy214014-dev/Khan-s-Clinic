import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, User, Shield, Check, LogOut, AlertCircle, RefreshCw, MessageSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { subscribeUserAppointments, subscribeAllAppointments, updateAppointmentStatus } from '../services/appointmentService';
import { AppointmentData, Language } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface UserPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const UserPortalModal: React.FC<UserPortalModalProps> = ({ isOpen, onClose, lang }) => {
  const { currentUser, userProfile, isAdmin, signOutUser } = useAuth();
  const [appointments, setAppointments] = useState<AppointmentData[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [statusUpdating, setStatusUpdating] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || !currentUser) return;

    if (isAdmin) {
      const unsub = subscribeAllAppointments((items) => {
        setAppointments(items);
      });
      return () => unsub();
    } else {
      const unsub = subscribeUserAppointments(currentUser.uid, (items) => {
        setAppointments(items);
      });
      return () => unsub();
    }
  }, [isOpen, currentUser, isAdmin]);

  if (!isOpen || !currentUser) return null;

  const filteredAppointments = filter === 'all'
    ? appointments
    : appointments.filter(a => a.status.toLowerCase() === filter.toLowerCase());

  const handleStatusChange = async (id: string, newStatus: any) => {
    try {
      setStatusUpdating(id);
      await updateAppointmentStatus(id, newStatus);
    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setStatusUpdating(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl border-t sm:border border-slate-200 animate-in fade-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200 max-h-[92dvh] sm:max-h-[90vh] flex flex-col pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] sm:pb-8">
        
        {/* Mobile drag handle */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Close Button with 44px min touch hitbox */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer active:scale-95"
          aria-label="Close portal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Profile Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200">
          <div className="flex items-center gap-3.5">
            {currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName || 'User'}
                className="w-12 h-12 rounded-full border-2 border-[#D4AF37] object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-[#0F172A] text-amber-300 font-bold flex items-center justify-center text-lg">
                {(currentUser.displayName || currentUser.email || 'U')[0].toUpperCase()}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold text-[#0F172A]">
                  {currentUser.displayName || 'Patient'}
                </h3>
                {isAdmin ? (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-800 border border-amber-500/30 px-2 py-0.5 rounded">
                    Admin / Specialist
                  </span>
                ) : (
                  <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    Patient Account
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500">{currentUser.email}</p>
            </div>
          </div>

          <button
            onClick={() => {
              signOutUser();
              onClose();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-red-300 hover:text-red-600 text-xs text-slate-600 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Sign Out' : 'লগআউট'}</span>
          </button>
        </div>

        {/* Title & Filter Tabs */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h4 className="text-sm font-bold text-slate-800">
              {isAdmin
                ? (lang === 'en' ? 'Clinic Appointments Management' : 'ক্লিনিকের সকল সিরিয়াল পরিচালনা')
                : (lang === 'en' ? 'My Consultation History' : 'আমার সকল সিরিয়াল সমূহ')}
            </h4>
            <span className="text-xs text-slate-500">
              {appointments.length} {lang === 'en' ? 'appointments recorded in database' : 'টি রেকর্ড সংরক্ষিত'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${filter === 'all' ? 'bg-white shadow font-bold text-[#0F172A]' : 'text-slate-600'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('confirmed')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${filter === 'confirmed' ? 'bg-white shadow font-bold text-emerald-800' : 'text-slate-600'}`}
            >
              Confirmed
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${filter === 'completed' ? 'bg-white shadow font-bold text-blue-800' : 'text-slate-600'}`}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Scrollable Appointments List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {filteredAppointments.length === 0 ? (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <Calendar className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-slate-700">
                {lang === 'en' ? 'No appointments found' : 'কোনো সিরিয়াল পাওয়া যায়নি'}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {lang === 'en' ? 'Book a consultation below to get started.' : 'নতুন অ্যাপয়েন্টমেন্ট বুক করুন।'}
              </div>
            </div>
          ) : (
            filteredAppointments.map((app) => (
              <div
                key={app.id}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#D4AF37] transition-all shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {app.id}
                      </span>
                      <span className="font-semibold text-sm text-[#0F172A]">
                        {app.serviceName}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {lang === 'en' ? 'Patient: ' : 'রোগী: '}<strong>{app.patientName}</strong> · {app.phone}
                    </div>
                  </div>

                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    app.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    app.status === 'Completed' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {app.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{app.preferredDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{app.preferredTime}</span>
                  </div>
                </div>

                {app.symptoms && (
                  <p className="text-[11px] text-slate-500 italic bg-amber-50/50 p-2 rounded border border-amber-100">
                    "{app.symptoms}"
                  </p>
                )}

                {/* Admin Controls */}
                {isAdmin && (
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400 font-semibold uppercase">Admin Actions:</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleStatusChange(app.id, 'Completed')}
                        disabled={statusUpdating === app.id}
                        className="px-2 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded text-xs font-semibold cursor-pointer"
                      >
                        Mark Completed
                      </button>
                      <button
                        onClick={() => handleStatusChange(app.id, 'Cancelled')}
                        disabled={statusUpdating === app.id}
                        className="px-2 py-1 bg-red-50 text-red-700 hover:bg-red-100 rounded text-xs font-semibold cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>{CLINIC_INFO.nameEn} · Sayed Nagar, Vatara</span>
          <span>Hotline: {CLINIC_INFO.phone}</span>
        </div>

      </div>
    </div>
  );
};
