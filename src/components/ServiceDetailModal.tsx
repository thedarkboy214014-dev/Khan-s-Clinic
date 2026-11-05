import React from 'react';
import { X, Clock, ShieldCheck, CheckCircle2, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem, Language } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  lang: Language;
  onBook: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  lang,
  onBook
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl border-t sm:border border-slate-200 animate-in fade-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200 max-h-[92dvh] sm:max-h-[90vh] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] sm:pb-8">
        
        {/* Mobile drag handle */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3 sm:hidden" />

        {/* Close Button with 44px min touch hitbox */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer active:scale-95"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold text-[#A88B2A] uppercase tracking-wider bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
              {service.category.toUpperCase()}
            </span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              {service.painLevel}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
            {lang === 'en' ? service.titleEn : service.titleBn}
          </h3>

          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {lang === 'en' ? service.subtitleEn : service.subtitleBn}
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-slate-700">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
              {lang === 'en' ? 'Clinical Overview' : 'চিকিৎসার বিবরণ'}
            </h4>
            <p className="text-sm leading-relaxed text-slate-600">
              {lang === 'en' ? service.descriptionEn : service.descriptionBn}
            </p>
          </div>

          {/* Procedure Steps */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
              {lang === 'en' ? 'Step-by-Step Clinical Protocol' : 'চিকিৎসার পর্যায়ক্রমিক ধাপসমূহ'}
            </h4>
            <div className="space-y-2.5">
              {(lang === 'en' ? service.procedureStepsEn : service.procedureStepsBn).map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-[#0F172A] text-amber-300 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 leading-normal">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
              {lang === 'en' ? 'Patient Benefits & Guarantees' : 'বিশেষ সুবিধাসমূহ'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(lang === 'en' ? service.benefitsEn : service.benefitsBn).map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timing & Cost Banner */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-800">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>{lang === 'en' ? 'Typical Duration:' : 'প্রয়োজনীয় সময়:'} <strong>{service.duration}</strong></span>
            </div>
            <div className="text-xs text-slate-800 font-bold">
              {service.priceRange}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
          >
            {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
          </button>

          <button
            onClick={() => {
              onClose();
              onBook(lang === 'en' ? service.titleEn : service.titleBn);
            }}
            className="btn-gold-luxury px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'en' ? 'Schedule this Treatment' : 'এই সেবার জন্য সিরিয়াল নিন'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
