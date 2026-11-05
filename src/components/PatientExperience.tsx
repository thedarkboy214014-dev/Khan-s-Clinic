import React, { useState } from 'react';
import { MessageSquare, Feather, Sparkles, Heart, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';
import { EXPERIENCE_STEPS, CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface PatientExperienceProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const PatientExperience: React.FC<PatientExperienceProps> = ({ lang, onOpenBooking }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = EXPERIENCE_STEPS[activeStepIndex];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-[#D4AF37]" />;
      case 'Feather': return <Feather className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkle': return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#D4AF37]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-[#E0F2FE]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{lang === 'en' ? 'The Patient Journey' : 'রোগীর স্বাচ্ছন্দ্য ও অভিজ্ঞতা'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            {lang === 'en' ? 'Comfort Reimagined from Hello to Goodbye' : 'হাসিমুখ থেকে বিদায় পর্যন্ত পরম প্রশান্তি'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {lang === 'en'
              ? 'We have engineered every single touchpoint to replace clinical anxiety with calming luxury, gentle touch, and complete transparency.'
              : 'ভয় কিংবা সংকোচ দূর করে প্রতিটি ধাপে আপনার শারীরিক ও মানসিক স্বস্তি নিশ্চিত করতে আমাদের রয়েছে বিশেষায়িত আরামদায়ক ব্যবস্থা।'
            }
          </p>
        </div>

        {/* Horizontal Step-by-Step Interactive Timeline Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {EXPERIENCE_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-[#1E293B] border-[#D4AF37] shadow-lg shadow-black/20 ring-1 ring-[#D4AF37]'
                    : 'bg-[#131E33] border-slate-800 hover:border-slate-700 hover:bg-[#1A2640]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#D4AF37]' : 'text-slate-500'}`}>
                    STEP {step.step}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#D4AF37]/20' : 'bg-slate-800'}`}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <div className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {lang === 'en' ? step.titleEn : step.titleBn}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5">
                  {lang === 'en' ? step.subtitleEn : step.subtitleBn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Display */}
        <div className="bg-[#162238] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <span>Phase {currentStep.step} of 04</span>
                <span>·</span>
                <span>{lang === 'en' ? 'Patient Protocol' : 'রোগী সেবা নীতিমালা'}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {lang === 'en' ? currentStep.titleEn : currentStep.titleBn}
              </h3>

              <p className="text-amber-200/90 text-sm font-medium">
                {lang === 'en' ? currentStep.subtitleEn : currentStep.subtitleBn}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {lang === 'en' ? currentStep.descriptionEn : currentStep.descriptionBn}
              </p>

              {/* Comfort Amenities */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  {lang === 'en' ? 'Included Comfort Standards:' : 'অন্তর্ভুক্ত সুযোগ-সুবিধা ও সেবা:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(lang === 'en' ? currentStep.amenitiesEn : currentStep.amenitiesBn).map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action trigger with mobile-first layout */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="btn-gold-luxury w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer active:scale-[0.98] transition-transform text-center"
                >
                  {lang === 'en' ? 'Experience Care with Us' : 'পরামর্শের জন্য সিরিয়াল দিন'}
                </button>

                <div className="text-xs text-slate-400 text-center sm:text-left">
                  {lang === 'en' ? 'Questions? Call ' : 'যেকোনো প্রশ্নে কল করুন: '}
                  <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-amber-300 font-semibold underline sm:no-underline">
                    01921-553385
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual: Modern Clinic Suite */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-xl group">
                <img
                  src="/src/assets/images/clinic_spa_suite_1793873791511.jpg"
                  alt="Modern boutique dental and physiotherapy clinic interior at Sayed Nagar"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0F172A]/90 backdrop-blur-md rounded-lg border border-slate-700 text-xs">
                  <div className="font-semibold text-white">Khan Dental & Physiotherapy Centre</div>
                  <div className="text-slate-300 text-[11px]">Sayed Nagar, Vatara, Dhaka · Modern Comfort Suite</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
