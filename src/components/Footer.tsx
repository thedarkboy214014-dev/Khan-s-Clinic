import React from 'react';
import { Sparkles, Phone, MapPin, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070B14] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column (Zone 1) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#C5A880] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#0F172A] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  {CLINIC_INFO.nameEn}
                </span>
                <span className="text-xs text-amber-200/80 font-medium">
                  {CLINIC_INFO.nameBn}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light max-w-md">
              {lang === 'en'
                ? 'A premier boutique dental clinic and specialized physiotherapy centre in Sayed Nagar, Vatara, Dhaka. Committed to gentle, pain-free treatments and complete patient dignity.'
                : 'সায়েদ নগর, ভাটারা, ঢাকার একটি প্রিমিয়াম ডেন্টাল ও ফিজিওথেরাপি সেন্টার। ভয়হীন, ব্যথামুক্ত চিকিৎসা ও রোগীদের আন্তরিক সেবায় নিবেদিত।'
              }
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-medium">
                <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                {lang === 'en' ? 'Women-Owned Practice' : 'নারী পরিচালনায় পরিচালিত'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                {lang === 'en' ? 'Class-B Autoclave Sterile' : 'ক্লাস-বি অটোক্লেভ সুরক্ষিত'}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-3">
              {lang === 'en' ? 'Quick Navigation' : 'সাইট লিংক'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  {lang === 'en' ? 'Services & Treatments' : 'চিকিৎসা সমূহ'}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-300 transition-colors">
                  {lang === 'en' ? 'The Patient Experience' : 'রোগীর স্বাচ্ছন্দ্য'}
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-amber-300 transition-colors">
                  {lang === 'en' ? 'Before & After Sliders' : 'তুলনামূলক গ্যালারি'}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-amber-300 transition-colors">
                  {lang === 'en' ? 'Cost Calculator' : 'খরচ হিসাব ক্যালকুলেটর'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-300 transition-colors">
                  {lang === 'en' ? 'Verified Patient Reviews' : 'রোগীদের মতামত'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  {lang === 'en' ? 'Sayed Nagar Directions' : 'ক্লিনিকের ঠিকানা ও ম্যাপ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hotline */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-3">
              {lang === 'en' ? 'Sayed Nagar Branch' : 'সায়েদ নগর শাখা'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.addressEn}
                  <span className="block text-slate-500 text-[11px] mt-0.5">{CLINIC_INFO.landmarkEn}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-amber-300 font-medium">{CLINIC_INFO.hoursEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-white hover:text-amber-300 font-bold transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="btn-gold-luxury w-full py-2.5 rounded-lg text-xs font-semibold cursor-pointer text-center"
              >
                {lang === 'en' ? 'Book Evening Consultation' : 'সন্ধ্যায় অ্যাপয়েন্টমেন্ট নিন'}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Accreditations, Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.nameEn}. {lang === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>{lang === 'en' ? 'BMDC Hygiene Standards' : 'বিএমডিসি স্বাস্থ্যবিধি মেনে পরিচালিত'}</span>
            <span>·</span>
            <span>{lang === 'en' ? 'Strict Sterilization Protocol' : 'শতভাগ জীবাণুমুক্ত পরিবেশ'}</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-amber-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>{lang === 'en' ? 'Top' : 'উপরে'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
