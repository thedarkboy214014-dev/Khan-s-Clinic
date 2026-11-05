import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Check, ShieldCheck, Sparkles, Send, Copy, ArrowRight, MessageSquare, Database } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';
import { Language, AppointmentData } from '../types';
import { useAuth } from '../context/AuthContext';
import { createFirestoreAppointment } from '../services/appointmentService';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialService?: string;
  initialEstimateNote?: string;
}

const TIME_SLOTS = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM'
];

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialService = '',
  initialEstimateNote = '',
}) => {
  const { currentUser, signInWithGoogle } = useAuth();
  const [step, setStep] = useState<number>(1);
  const [patientName, setPatientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>(
    initialService || 'Rotary Pain-Free Root Canal (RCT)'
  );
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>('6:00 PM');
  const [specialist, setSpecialist] = useState<string>('female-dentist');
  const [notes, setNotes] = useState<string>(initialEstimateNote || '');
  const [bookingConfirmed, setBookingConfirmed] = useState<AppointmentData | null>(null);
  const [copiedRef, setCopiedRef] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser?.displayName && !patientName) {
      setPatientName(currentUser.displayName);
    }
  }, [currentUser]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim()) return;

    setIsSaving(true);
    const referenceId = `KDPC-SN-${Math.floor(1000 + Math.random() * 9000)}`;
    const effectiveUserId = currentUser ? currentUser.uid : `guest-${Date.now()}`;

    const newAppointment: AppointmentData = {
      id: referenceId,
      patientName,
      phone,
      serviceCategory: 'general',
      serviceName: selectedService,
      preferredDate: selectedDate,
      preferredTime: selectedTime,
      specialistPreference: specialist === 'female-dentist' ? 'Female Dental Specialist' : 'Senior Physiotherapist',
      symptoms: notes,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    try {
      // Save to Firebase Firestore
      await createFirestoreAppointment({
        id: referenceId,
        userId: effectiveUserId,
        patientName,
        phone,
        serviceCategory: 'general',
        serviceName: selectedService,
        preferredDate: selectedDate,
        preferredTime: selectedTime,
        specialistPreference: newAppointment.specialistPreference,
        symptoms: notes,
      });
    } catch (err) {
      console.warn('Firestore write fallback to local cache:', err);
    }

    // Also persist to localStorage for instant client convenience
    try {
      const existing = JSON.parse(localStorage.getItem('kdpc_appointments') || '[]');
      localStorage.setItem('kdpc_appointments', JSON.stringify([newAppointment, ...existing]));
    } catch (err) {
      // ignore
    }

    setIsSaving(false);
    setBookingConfirmed(newAppointment);
    setStep(3);
  };

  const generateWhatsAppMessage = () => {
    if (!bookingConfirmed) return '';
    const text = `Hello Khan Dental & Physiotherapy Centre!%0A%0AI would like to confirm my consultation:%0A%0A• Reference: ${bookingConfirmed.id}%0A• Name: ${bookingConfirmed.patientName}%0A• Phone: ${bookingConfirmed.phone}%0A• Service: ${bookingConfirmed.serviceName}%0A• Date: ${bookingConfirmed.preferredDate}%0A• Time: ${bookingConfirmed.preferredTime} (Evening)%0A• Branch: Sayed Nagar, Vatara, Dhaka-1212%0A%0APlease confirm my slot. Thank you!`;
    return `https://wa.me/8801921553385?text=${text}`;
  };

  const handleCopyRef = () => {
    if (!bookingConfirmed) return;
    navigator.clipboard.writeText(bookingConfirmed.id);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl border-t sm:border border-slate-200 animate-in fade-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200 max-h-[92dvh] sm:max-h-[90vh] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] sm:pb-8">
        
        {/* Mobile drag handle affordance */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Close Button with 44px min touch hitbox */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer active:scale-95"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-slate-100">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A88B2A] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Sayed Nagar Branch · Vatara' : 'সায়েদ নগর ব্রাঞ্চ · ভাটারা'}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
            {step === 3
              ? (lang === 'en' ? 'Consultation Confirmed!' : 'সিরিয়াল নিশ্চিত হয়েছে!')
              : (lang === 'en' ? 'Book Your Consultation' : 'অ্যাপয়েন্টমেন্ট গ্রহণ')}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {lang === 'en'
              ? 'Evening Outpatient Practice: 5:00 PM – 10:30 PM · Zero-Pain Comfort Protocol'
              : 'সান্ধ্যকালীন চেম্বার: বিকাল ৫:০০ - রাত ১০:৩০ · ব্যথামুক্ত চিকিৎসা সেবা'}
          </p>
        </div>

        {/* Step 1 & 2 Form */}
        {step < 3 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Service & Specialist Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                {lang === 'en' ? 'Select Treatment:' : 'চিকিৎসা নির্বাচন করুন:'}
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium border border-slate-300 rounded-xl bg-white text-slate-800 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
              >
                {SERVICES_LIST.map((srv) => (
                  <option key={srv.id} value={srv.titleEn}>
                    {lang === 'en' ? `${srv.titleEn} (${srv.priceRange})` : `${srv.titleBn} (${srv.priceRange})`}
                  </option>
                ))}
              </select>
            </div>

            {/* Specialist Preference */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                {lang === 'en' ? 'Specialist Preference:' : 'চিকিৎসক নির্বাচন:'}
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setSpecialist('female-dentist')}
                  className={`p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                    specialist === 'female-dentist'
                      ? 'border-[#D4AF37] bg-amber-500/10 text-[#0F172A] font-bold'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="font-semibold text-slate-900">
                    {lang === 'en' ? 'Female Dental Specialist' : 'নারী ডেন্টাল বিশেষজ্ঞ'}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {lang === 'en' ? 'Cosmetic & Root Canal' : 'কসমেটিক ও রুট ক্যানেল'}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSpecialist('physio')}
                  className={`p-2.5 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                    specialist === 'physio'
                      ? 'border-[#D4AF37] bg-amber-500/10 text-[#0F172A] font-bold'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="font-semibold text-slate-900">
                    {lang === 'en' ? 'Senior Physiotherapist' : 'সিনিয়র ফিজিওথেরাপিস্ট'}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {lang === 'en' ? 'TMJ, Spine & Posture' : 'টিএমজে ও স্পাইন রিহ্যাব'}
                  </div>
                </button>
              </div>
            </div>

            {/* Date & Time (Evening hours starting 5 PM) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" />
                  {lang === 'en' ? 'Preferred Date:' : 'তারিখ:'}
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  <Clock className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" />
                  {lang === 'en' ? 'Time Slot (Opens 5 PM):' : 'সময় (বিকাল ৫টা হতে):'}
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot} (Evening)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Patient Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  <User className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" />
                  {lang === 'en' ? 'Patient Full Name:' : 'রোগীর নাম:'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tanzina Hossain"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  <Phone className="w-3.5 h-3.5 inline mr-1 text-[#D4AF37]" />
                  {lang === 'en' ? 'Phone Number:' : 'ফোন নম্বর:'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 017xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            {/* Symptoms / Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                {lang === 'en' ? 'Notes / Chief Complaint (Optional):' : 'সমস্যা বা উপসর্গ (ঐচ্ছিক):'}
              </label>
              <textarea
                rows={2}
                placeholder={lang === 'en' ? 'e.g. Mild toothache while drinking cold water or jaw joint stiffness' : 'যেমন: ঠান্ডা পানি খেলে শিরশির করে বা চোয়ালে টান লাগে...'}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSaving}
                className="btn-gold-luxury w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide cursor-pointer flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
              >
                {isSaving ? (
                  <span>{lang === 'en' ? 'Saving to Database...' : 'ডাটাবেজে সংরক্ষিত হচ্ছে...'}</span>
                ) : (
                  <>
                    <span>{lang === 'en' ? 'Confirm Evening Appointment' : 'সিরিয়াল নিশ্চিত করুন'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="text-center text-[11px] text-slate-400">
              {currentUser ? (
                <span className="text-emerald-700 font-medium">
                  {lang === 'en' ? `Logged in as ${currentUser.displayName || currentUser.email} · Automatically saved to your account` : `${currentUser.displayName || currentUser.email} হিসেবে লগইন আছেন`}
                </span>
              ) : (
                <span>
                  {lang === 'en'
                    ? 'Free cancellation anytime. You can sign in with Google to view and manage your appointments.'
                    : 'যেকোনো সময় ফ্রি ক্যান্সেলেশন। পরবর্তীতে দেখার জন্য লগইন করে নিতে পারেন।'}
                </span>
              )}
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation Ticket */}
        {step === 3 && bookingConfirmed && (
          <div className="space-y-6">
            <div className="p-5 bg-[#0F172A] text-white rounded-2xl border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-300 uppercase tracking-wider font-semibold">
                  {lang === 'en' ? 'APPOINTMENT PASS' : 'ডিজিটাল সিরিয়াল কার্ড'}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <Check className="w-3.5 h-3.5" />
                  <span>{bookingConfirmed.status}</span>
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400">{lang === 'en' ? 'Reference Number:' : 'রেফারেন্স আইডি:'}</div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-mono text-xl font-bold text-white tracking-wider">
                    {bookingConfirmed.id}
                  </span>
                  <button
                    onClick={handleCopyRef}
                    className="p-1 hover:bg-slate-800 rounded text-amber-300 text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedRef ? (lang === 'en' ? 'Copied!' : 'কপি হয়েছে') : (lang === 'en' ? 'Copy' : 'কপি')}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block">{lang === 'en' ? 'Patient:' : 'রোগী:'}</span>
                  <span className="font-semibold text-white">{bookingConfirmed.patientName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">{lang === 'en' ? 'Contact:' : 'ফোন:'}</span>
                  <span className="font-semibold text-white">{bookingConfirmed.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">{lang === 'en' ? 'Date & Time:' : 'সময়সূচী:'}</span>
                  <span className="font-semibold text-amber-300">
                    {bookingConfirmed.preferredDate} · {bookingConfirmed.preferredTime}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">{lang === 'en' ? 'Service:' : 'সেবা:'}</span>
                  <span className="font-semibold text-white truncate block">{bookingConfirmed.serviceName}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <span className="text-white font-medium">{CLINIC_INFO.nameEn}</span> · {CLINIC_INFO.addressEn} (Near Boro Mosjid, doshtala circle)
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'en' ? 'Send Pass via WhatsApp to 01921-553385' : 'হোয়াটসঅ্যাপে সিরিয়াল নিশ্চিত করুন'}</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === 'en' ? `Direct Call Hotline: ${CLINIC_INFO.phone}` : `জরুরি কল: ${CLINIC_INFO.phone}`}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                {lang === 'en' ? 'Done & Close' : 'সম্পন্ন করুন'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
