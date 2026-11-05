import React from 'react';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck, Clock, MapPin, Heart, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#162238] text-white pt-10 pb-16 lg:py-20">
      {/* Subtle architectural ambient light glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#E0F2FE]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & High-Intent Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Subtle editorial kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-amber-500/30 text-amber-300 text-xs tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{lang === 'en' ? 'Boutique Dental Clinic & Physiotherapy Centre' : 'আধুনিক ডেন্টাল ক্লিনিক ও ফিজিওথেরাপি সেন্টার'}</span>
            </div>

            {/* Headline with Cormorant Garamond luxury serif */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] text-balance">
              {lang === 'en' ? (
                <>
                  Crafting Unforgettable Smiles with <span className="italic text-[#D4AF37] font-semibold">Precision & Comfort.</span>
                </>
              ) : (
                <>
                  নিখুঁত যত্ন ও পরম স্বাচ্ছন্দ্যে আপনার <span className="italic text-[#D4AF37] font-semibold">উজ্জ্বল হাসির রূপায়ন।</span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {lang === 'en'
                ? "Experience state-of-the-art dental care and specialized physiotherapy rehabilitation in a relaxing, spa-like environment tailored to your complete well-being at Sayed Nagar, Vatara, Dhaka."
                : "সায়েদ নগর, ভাটারা, ঢাকায় অত্যাধুনিক ডেন্টাল কেয়ার ও ফিজিওথেরাপি রিহ্যাবিলিটেশনের এক অনন্য সমন্বয়—ভয়হীন, ব্যথামুক্ত ও স্পা-সদৃশ প্রশান্তিময় পরিবেশে আপনার সুস্থতা।"
              }
            </p>

            {/* Bullet Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{lang === 'en' ? 'Zero-Sting Gentle Anesthesia Protocol' : 'ব্যথাহীন অবশ করার আধুনিক প্রযুক্তি'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{lang === 'en' ? 'Women-Led Team of Specialist Doctors' : 'নারী বিশেষজ্ঞ ডাক্তারদের মমতাময়ী সেবা'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{lang === 'en' ? 'Exclusive Evening Hours (Opens 5 PM)' : 'সান্ধ্যকালীন চেম্বার: বিকাল ৫:০০ - রাত ১০:৩০'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{lang === 'en' ? 'Integrated TMJ, Smile & Spine Therapy' : 'দাঁত, চোয়াল ও স্পাইনের সমন্বিত থেরাপি'}</span>
              </div>
            </div>

            {/* CTAs with Mobile-First Thumb Ergonomics */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="btn-gold-luxury w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-amber-500/10 active:scale-[0.98] transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'en' ? 'Schedule Your Consultation' : 'অ্যাপয়েন্টমেন্ট নিশ্চিত করুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="btn-ghost-luxury w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white border border-slate-700 hover:border-amber-400/60 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>{lang === 'en' ? 'Explore Treatments' : 'চিকিৎসা সমূহ দেখুন'}</span>
              </a>
            </div>

            {/* Quick contact direct dial */}
            <div className="flex items-center gap-3 pt-1 text-xs text-slate-400">
              <span className="text-slate-400">{lang === 'en' ? 'Need urgent consultation?' : 'জরুরি প্রয়োজনে সরাসরি কল করুন:'}</span>
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="text-amber-300 hover:underline font-semibold flex items-center gap-1"
              >
                <span>{CLINIC_INFO.phone}</span>
              </a>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400 font-medium">
                {lang === 'en' ? 'Today: Opens 5:00 PM' : 'আজ বিকাল ৫:০০ টায় চেম্বার শুরু'}
              </span>
            </div>

          </div>

          {/* Right Column: High-End Split Media & Trust Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-slate-700/60 bg-slate-900 group">
              <img
                src="/src/assets/images/hero_luxury_smile_1793873790288.jpg"
                alt="Radiant healthy smile from Khan Dental & Physiotherapy Centre"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />

              {/* Floating Verified Rating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0F172A]/90 backdrop-blur-md border border-amber-500/30 text-white shadow-xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-white">4.6</span>
                        <div className="flex text-amber-400 text-xs">
                          {'★★★★★'}
                        </div>
                        <span className="text-xs text-slate-300 font-normal">
                          (18+ {lang === 'en' ? 'Reviews' : 'রিভিউ'})
                        </span>
                      </div>
                      <p className="text-xs text-amber-200/90 font-medium">
                        {lang === 'en' ? 'Google Verified Dental Practice' : 'গুগল ভেরিফায়েড ক্লিনিক রেটিং'}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block text-right border-l border-slate-700 pl-3">
                    <div className="text-[11px] text-slate-400">
                      {lang === 'en' ? 'Sayed Nagar, Vatara' : 'সায়েদ নগর, ভাটারা'}
                    </div>
                    <div className="text-xs font-semibold text-emerald-400">
                      {lang === 'en' ? 'Opens 5:00 PM' : 'বিকাল ৫:০০ টায় শুরু'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Top-Right Badge: Women-Owned */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#0F172A]/85 backdrop-blur-md border border-amber-500/30 text-[11px] font-medium text-amber-200 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                <span>{lang === 'en' ? 'Women-Owned Practice' : 'নারী চিকিৎসকদের তত্ত্বাবধানে'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust Micro-Banner */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">4.6 ★ Rating</div>
              <div className="text-xs text-slate-400">{lang === 'en' ? '18+ Google verified reviews' : '১৮+ ভেরিফায়েড স্থানীয় রিভিউ'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">Zero-Pain Protocol</div>
              <div className="text-xs text-slate-400">{lang === 'en' ? 'Advanced buffered anesthetics' : 'সম্পূর্ণ ব্যথামুক্ত চিকিৎসা সেবা'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">Evening Care: 5 PM</div>
              <div className="text-xs text-slate-400">{lang === 'en' ? 'Daily 5:00 PM – 10:30 PM' : 'প্রতিদিন বিকাল ৫টা থেকে রাত ১০:৩০'}</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">Vatara, Dhaka 1212</div>
              <div className="text-xs text-slate-400">{lang === 'en' ? 'Sayed Nagar, Near Boro Mosjid' : 'সায়েদ নগর, দশতোলা মোড়'}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
