import React, { useState } from 'react';
import { Sparkles, Zap, Sun, ShieldCheck, Droplets, ShieldAlert, Smile, Anchor, Activity, HeartPulse, UserCheck, ArrowRight, Clock, Shield, Check } from 'lucide-react';
import { SERVICES_LIST } from '../data/clinicData';
import { ServiceItem, Language } from '../types';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
  onBookService,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', nameEn: 'All Treatments', nameBn: 'সকল চিকিৎসা সেবা' },
    { id: 'cosmetic', nameEn: 'Cosmetic Dentistry', nameBn: 'কসমেটিক ডেন্টিস্ট্রি' },
    { id: 'general', nameEn: 'General & Restorative', nameBn: 'সাধারণ ও রুট ক্যানেল' },
    { id: 'ortho', nameEn: 'Orthodontics & Implants', nameBn: 'অ্যালাইনার ও ইমপ্ল্যান্ট' },
    { id: 'physio', nameEn: 'Physiotherapy & Rehab', nameBn: 'ফিজিওথেরাপি ও রিহ্যাব' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#D4AF37]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#D4AF37]" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#D4AF37]" />;
      case 'Smile': return <Smile className="w-5 h-5 text-[#D4AF37]" />;
      case 'Anchor': return <Anchor className="w-5 h-5 text-[#D4AF37]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#D4AF37]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#D4AF37]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#D4AF37]" />;
      default: return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A88B2A] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Curated Clinical Expertise' : 'বিশেষায়িত চিকিৎসা সেবা'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight">
            {lang === 'en' ? 'State-of-the-Art Dental & Physiotherapy Care' : 'উন্নত প্রযুক্তির ডেন্টাল ও ফিজিওথেরাপি সেবা'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {lang === 'en'
              ? 'From porcelain smile aesthetics to pain-free rotary endodontics and TMJ rehabilitation, every treatment is delivered with uncompromising comfort and precision.'
              : 'দাঁতের সৌন্দর্য বর্ধন, ব্যথামুক্ত রুট ক্যানেল থেকে শুরু করে চোয়াল ও ঘাড়ের ফিজিওথেরাপি—প্রতিটি চিকিৎসাই অত্যন্ত যত্ন ও সতর্কতার সাথে সম্পন্ন করা হয়।'
            }
          </p>
        </div>

        {/* Category Tabs with 44px Touch Targets */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-[#0F172A] text-[#D4AF37] shadow-md border border-[#0F172A]'
                  : 'bg-white text-slate-600 hover:text-[#0F172A] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {lang === 'en' ? cat.nameEn : cat.nameBn}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="card-luxury bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Highlight if popular */}
              {service.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#D4AF37] to-[#C5A880] text-[#0F172A] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-sm">
                  {lang === 'en' ? 'Patient Favorite' : 'জনপ্রিয় সেবা'}
                </div>
              )}

              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E0F2FE]/70 border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#0F172A] group-hover:border-[#D4AF37] transition-colors duration-300">
                    {getIcon(service.icon)}
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {service.category === 'cosmetic' ? (lang === 'en' ? 'Cosmetic' : 'কসমেটিক') :
                       service.category === 'general' ? (lang === 'en' ? 'Restorative' : 'রুট ক্যানেল') :
                       service.category === 'ortho' ? (lang === 'en' ? 'Orthodontics' : 'অর্থোডন্টিক্স') :
                       (lang === 'en' ? 'Rehab' : 'ফিজিওথেরাপি')}
                    </span>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                      {service.painLevel}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-2 group-hover:text-[#A88B2A] transition-colors duration-200">
                  {lang === 'en' ? service.titleEn : service.titleBn}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                  {lang === 'en' ? service.descriptionEn : service.descriptionBn}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  {(lang === 'en' ? service.benefitsEn : service.benefitsBn).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Meta & Actions */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="font-semibold text-slate-800">
                    {service.priceRange}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="min-h-[44px] w-full py-2.5 px-3 text-xs font-semibold text-[#0F172A] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>{lang === 'en' ? 'Learn More' : 'বিস্তারিত'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookService(lang === 'en' ? service.titleEn : service.titleBn)}
                    className="btn-gold-luxury min-h-[44px] w-full py-2.5 px-3 rounded-xl text-xs font-semibold cursor-pointer active:scale-95"
                  >
                    {lang === 'en' ? 'Book Now' : 'সিরিয়াল'}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
