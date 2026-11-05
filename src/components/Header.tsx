import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Shield, Globe, Menu, X, Calendar, Sparkles, User, LogIn, ChevronDown } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenUserPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenBooking,
  onOpenUserPortal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, isAdmin, signInWithGoogle, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'en' ? 'Services' : 'চিকিৎসা সেবা', href: '#services' },
    { name: lang === 'en' ? 'The Experience' : 'রোগীর স্বাচ্ছন্দ্য', href: '#experience' },
    { name: lang === 'en' ? 'Before & After' : 'ফলাফল গ্যালারি', href: '#transformations' },
    { name: lang === 'en' ? 'Reviews' : 'রোগীদের মতামত', href: '#reviews' },
    { name: lang === 'en' ? 'Estimator' : 'খরচ হিসাব', href: '#estimator' },
    { name: lang === 'en' ? 'Contact & Map' : 'যোগাযোগ ও ম্যাপ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Banner with Safe Area Inset */}
      <div className="bg-[#070B14] text-slate-300 border-b border-slate-800 text-xs py-1.5 pt-[calc(0.4rem+env(safe-area-inset-top,0px))] px-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center flex-wrap gap-3 sm:gap-6">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="min-h-[44px] flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-medium active:opacity-80"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{lang === 'en' ? 'Opens 5:00 PM (Evening Practice)' : 'বিকাল ৫:০০ টায় খোলে (সান্ধ্যকালীন চেম্বার)'}</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{lang === 'en' ? 'Sayed Nagar, Vatara, Dhaka' : 'সায়েদ নগর, ভাটারা, ঢাকা'}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden xs:flex items-center gap-1.5 text-amber-200/90 font-medium text-[11px] bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
              <Shield className="w-3 h-3 text-[#D4AF37]" />
              <span>{lang === 'en' ? 'Women-Owned' : 'নারী পরিচালনায়'}</span>
            </div>

            {/* Language Switcher with 44px min touch target */}
            <button
              onClick={onToggleLang}
              className="min-h-[44px] flex items-center gap-1 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer text-xs font-semibold px-2.5 py-1.5 rounded border border-slate-700 hover:border-amber-400/50 active:scale-95"
              title="Toggle English / Bengali"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5 border-b border-slate-800'
            : 'bg-[#0F172A]/90 backdrop-blur-sm py-4 border-b border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#C5A880] p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-[#0F172A] rounded-[7px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
                Khan Dental & Physio
              </span>
              <span className="text-[11px] text-amber-200/70 tracking-wider uppercase font-medium">
                {lang === 'en' ? 'Sayed Nagar Branch · Vatara' : 'সায়েদ নগর ব্রাঞ্চ · ভাটারা'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Zone 2) */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link-gold text-sm font-medium text-slate-200 hover:text-amber-300 whitespace-nowrap transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Zone (Zone 3): Auth Button + Book Appointment */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Google Auth Status / User Portal Trigger */}
            {currentUser ? (
              <button
                onClick={onOpenUserPortal}
                className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs border border-slate-700 transition-colors cursor-pointer"
                title="Open Patient Portal / My Appointments"
              >
                {currentUser.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || 'User'}
                    className="w-6 h-6 rounded-full object-cover border border-[#D4AF37]"
                  />
                ) : (
                  <User className="w-4 h-4 text-amber-300" />
                )}
                <span className="hidden sm:inline font-medium max-w-[100px] truncate">
                  {currentUser.displayName?.split(' ')[0] || 'Account'}
                </span>
                {isAdmin && (
                  <span className="hidden sm:inline text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">
                    Admin
                  </span>
                )}
              </button>
            ) : (
              <button
                onClick={() => {
                  signInWithGoogle().catch(() => {});
                }}
                disabled={loading}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition-all cursor-pointer"
              >
                {/* SVG Google 'G' icon */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>{lang === 'en' ? 'Sign In' : 'লগইন'}</span>
              </button>
            )}

            <button
              onClick={() => onOpenBooking()}
              className="btn-gold-luxury px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-1.5" />
              {lang === 'en' ? 'Book Appointment' : 'সিরিয়াল দিন'}
            </button>

            {/* Mobile menu trigger with 44px min touch hitbox */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-slate-200 hover:text-amber-300 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer with generous touch targets */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F172A] border-b border-slate-800 px-5 py-5 mt-2 space-y-4 animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[44px] flex items-center text-slate-200 hover:text-amber-300 text-sm font-medium py-2 px-3 rounded-lg hover:bg-slate-800/60 border-b border-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="min-h-[44px] flex items-center justify-center gap-2 w-full py-2.5 bg-slate-800 text-amber-300 rounded-xl text-sm font-medium border border-slate-700 active:scale-[0.98] transition-transform"
              >
                <Phone className="w-4 h-4" />
                <span>{lang === 'en' ? `Call Hotline: ${CLINIC_INFO.phone}` : `কল করুন: ${CLINIC_INFO.phone}`}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn-gold-luxury min-h-[44px] w-full py-3 rounded-xl text-sm font-semibold text-center active:scale-[0.98] transition-transform"
              >
                {lang === 'en' ? 'Schedule Consultation' : 'অ্যাপয়েন্টমেন্ট নিন'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
