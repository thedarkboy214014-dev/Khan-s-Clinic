import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, Copy, Check, ChevronDown, ChevronUp, Sparkles, Send, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, CLINIC_FAQS } from '../data/clinicData';
import { Language } from '../types';

interface LocationContactProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ lang, onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [inquiryName, setInquiryName] = useState<string>('');
  const [inquiryPhone, setInquiryPhone] = useState<string>('');
  const [inquiryMessage, setInquiryMessage] = useState<string>('');
  const [inquirySent, setInquirySent] = useState<boolean>(false);

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(CLINIC_INFO.plusCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryName('');
      setInquiryPhone('');
      setInquiryMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A88B2A] uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{lang === 'en' ? 'Visit Our Boutique Centre' : 'সরাসরি আমাদের সেন্টারে আসুন'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight">
            {lang === 'en' ? 'Sayed Nagar Branch · Vatara, Dhaka' : 'খান ডেন্টাল ক্লিনিক (সায়েদ নগর ব্রাঞ্চ)'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Conveniently situated at the circle of doshtala near Boro Mosjid in Sayed Nagar. Ample street access, relaxing reception, and dedicated evening consultations.'
              : 'কুমিল্লা পাড়া, দশতোলা মোড় সংলগ্ন বড় মসজিদের কাছে। শান্ত পরিবেশ ও বিকাল ৫টা থেকে রাত ১০:৩০ পর্যন্ত খোলা।'
            }
          </p>
        </div>

        {/* 2-Column Split: Clinic Map & Direct Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Interactive Map & Landmarks */}
          <div className="lg:col-span-7 bg-[#0F172A] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold tracking-wider uppercase">
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>{lang === 'en' ? 'Interactive Location Pin' : 'অবস্থান নির্দেশিকা'}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span>{lang === 'en' ? 'Plus Code: ' : 'প্লাস কোড: '}</span>
                  <button
                    type="button"
                    onClick={handleCopyPlusCode}
                    className="min-h-[44px] font-mono text-amber-300 hover:text-white bg-slate-800 px-3 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer active:scale-95"
                    aria-label="Copy Plus Code"
                  >
                    <span>{CLINIC_INFO.plusCode}</span>
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  {copiedCode && <span className="text-emerald-400 ml-1 text-xs">{lang === 'en' ? 'Copied!' : 'কপি হয়েছে'}</span>}
                </div>
              </div>

              {/* Styled Map Representation */}
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 group mb-6">
                {/* Visual Map graphic with grid, landmarks, and pulsating gold pin */}
                <div className="absolute inset-0 bg-[#070B14] opacity-95">
                  {/* Road network grid representation */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px]" />
                  
                  {/* Road Lines */}
                  {/* Madani Avenue (100 Feet) */}
                  <div className="absolute top-12 left-0 right-0 h-3 bg-slate-800 border-y border-slate-700 flex items-center justify-end px-4">
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider">Madani Avenue (100 Ft Rd)</span>
                  </div>
                  {/* Sayed Nagar Main Road */}
                  <div className="absolute top-0 bottom-0 left-1/3 w-3.5 bg-slate-800 border-x border-slate-700 flex items-center justify-center">
                    <span className="text-[9px] text-slate-400 rotate-90 whitespace-nowrap">Sayed Nagar Road 11/1</span>
                  </div>
                  {/* Circle of Doshtala */}
                  <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 border-dashed border-[#D4AF37]/40 flex items-center justify-center bg-[#D4AF37]/5">
                    <span className="text-[9px] text-amber-200/80 font-mono text-center">Doshtala Circle<br/>(দশতোলা মোড়)</span>
                  </div>

                  {/* Boro Mosjid Landmark */}
                  <div className="absolute top-[40%] left-[55%] p-2 rounded-lg bg-slate-800/90 border border-slate-700 text-[10px] text-slate-300 flex items-center gap-1.5 shadow-md">
                    <span>🕌 Boro Mosjid</span>
                  </div>

                  {/* Cumilla Para note */}
                  <div className="absolute bottom-8 left-[15%] text-[10px] text-slate-500">
                    Cumilla Para, Block-A
                  </div>

                  {/* Pulsating Luxury Gold Pin for Khan Dental */}
                  <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/30 animate-ping absolute inset-0" />
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37] border-2 border-[#0F172A] shadow-lg flex items-center justify-center text-[#0F172A] font-bold">
                        <MapPin className="w-4 h-4 text-[#0F172A] fill-[#0F172A]" />
                      </div>
                    </div>
                    <div className="mt-2 bg-[#0F172A] border border-[#D4AF37] text-amber-300 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap">
                      Khan Dental & Physio
                    </div>
                  </div>
                </div>

                {/* External Maps Link */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Khan Dental Clinic Sayed Nagar Vatara Dhaka")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0F172A]/90 hover:bg-[#0F172A] border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-sm transition-all"
                >
                  <span>{lang === 'en' ? 'Open in Google Maps' : 'গুগল ম্যাপে দেখুন'}</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Exact Address & Landmarks Details */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{lang === 'en' ? 'Full Clinic Address:' : 'ক্লিনিকের পূর্ণাঙ্গ ঠিকানা:'}</strong>
                    <span>{lang === 'en' ? CLINIC_INFO.addressEn : CLINIC_INFO.addressBn}</span>
                    <span className="block text-slate-400 mt-0.5">
                      {lang === 'en' ? CLINIC_INFO.landmarkEn : CLINIC_INFO.landmarkBn}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2 border-t border-slate-800">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-white font-medium">{lang === 'en' ? 'Evening Hours:' : 'সান্ধ্যকালীন সময়:'} </span>
                    <span className="text-amber-300 font-semibold">{lang === 'en' ? CLINIC_INFO.hoursEn : CLINIC_INFO.hoursBn}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Directions from surrounding areas */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
              <span className="text-amber-300 font-semibold block mb-1">
                {lang === 'en' ? 'How to Reach Us:' : 'আসার সহজ পথ:'}
              </span>
              <p className="leading-relaxed">
                {lang === 'en'
                  ? '• 5 min from Notun Bazar or Madani Avenue (100 Feet) by rickshaw. Ask for "Doshtala Mor, Sayed Nagar Boro Mosjid".'
                  : '• নতুন বাজার বা মাদানী এভিনিউ (১০০ ফিট) থেকে রিকশায় মাত্র ৫ মিনিট। রিকশাচালককে বলুন "সায়েদ নগর দশতোলা মোড়, বড় মসজিদের কাছে"।'}
              </p>
            </div>
          </div>

          {/* Right Column: Direct Contact & Quick Inquiry Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl font-bold text-[#0F172A]">
                  {lang === 'en' ? 'Get in Touch' : 'সরাসরি যোগাযোগ'}
                </h3>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {lang === 'en' ? 'Daily: Opens 5 PM' : 'প্রতিদিন বিকাল ৫টায় শুরু'}
                </span>
              </div>

              <p className="text-xs text-slate-500 mb-6">
                {lang === 'en'
                  ? 'Call our hotline or send a message for instant appointment bookings and dental emergency guidance.'
                  : 'যেকোনো ডেন্টাল বা ফিজিওথেরাপি সংক্রান্ত জরুরি পরামর্শের জন্য সরাসরি কল বা বার্তা পাঠান।'
                }
              </p>

              {/* Direct Action Buttons */}
              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="w-full py-3.5 px-4 bg-[#0F172A] hover:bg-slate-800 text-white rounded-xl text-sm font-semibold flex items-center justify-between transition-colors shadow-md"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>{CLINIC_INFO.phone}</span>
                  </div>
                  <span className="text-xs text-amber-300">{lang === 'en' ? 'Tap to Call' : 'সরাসরি কল'}</span>
                </a>

                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold flex items-center justify-between transition-colors shadow-md"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4" />
                    <span>{lang === 'en' ? 'WhatsApp Consultation' : 'হোয়াটসঅ্যাপ চ্যাট'}</span>
                  </div>
                  <span className="text-xs text-emerald-100">{lang === 'en' ? 'Instant Reply' : 'তাৎক্ষণিক উত্তর'}</span>
                </a>
              </div>

              {/* Quick Inquiry Form */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                  {lang === 'en' ? 'Request Call Back' : 'কল ব্যাক রিকোয়েস্ট'}
                </h4>

                {inquirySent ? (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs space-y-1">
                    <div className="font-bold">{lang === 'en' ? 'Message Received!' : 'বার্তা গৃহীত হয়েছে!'}</div>
                    <div>{lang === 'en' ? 'Our clinic reception will call you back shortly.' : 'আমাদের প্রতিনিধি খুব শীঘ্রই আপনাকে কল করবেন।'}</div>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder={lang === 'en' ? 'Your Name' : 'আপনার নাম'}
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-base md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder={lang === 'en' ? 'Phone Number (e.g. 017...)' : 'ফোন নম্বর'}
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-base md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                    />
                    <textarea
                      rows={2}
                      placeholder={lang === 'en' ? 'Your inquiry (e.g. root canal fee or appointment)' : 'আপনার প্রশ্ন বা বার্তা...'}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-base md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                    />
                    <button
                      type="submit"
                      className="btn-gold-luxury w-full min-h-[48px] py-3 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform"
                    >
                      <Send className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Request Immediate Callback' : 'কল ব্যাক পাঠান'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Women-owned trust badge */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-amber-800 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
              <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] shrink-0" />
              <span>{lang === 'en' ? 'Proudly women-owned and specialist-operated healthcare practice.' : 'নারী চিকিৎসকদের নিবেদিত তত্ত্বাবধানে পরিচালিত বিশ্বস্ত প্রতিষ্ঠান।'}</span>
            </div>

          </div>

        </div>

        {/* Local FAQ Accordion */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
              {lang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ কিছু প্রশ্নোত্তর'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {lang === 'en' ? 'Everything you need to know about visits to Khan Dental & Physiotherapy' : 'আমাদের চিকিৎসা সেবা ও নিয়মাবলী সম্পর্কিত তথ্য'}
            </p>
          </div>

          <div className="space-y-3">
            {CLINIC_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#0F172A]">
                      {lang === 'en' ? faq.qEn : faq.qBn}
                    </span>
                    <span className="p-1 rounded-full bg-slate-100 text-slate-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {lang === 'en' ? faq.aEn : faq.aBn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
