import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight, Check, Info, Maximize2, X } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { Language } from '../types';

interface BeforeAfterGalleryProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ lang, onOpenBooking }) => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [zoomModalOpen, setZoomModalOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentCase = BEFORE_AFTER_CASES[selectedCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformations" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A88B2A] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{lang === 'en' ? 'Clinical Transformations' : 'বাস্তব চিকিৎসার ফলাফল'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight">
            {lang === 'en' ? 'Interactive Before & After Gallery' : 'দাঁতের রূপান্তরের তুলনামূলক দৃশ্য'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Drag the slider horizontally to reveal the precision artistry of our cosmetic and restorative dental treatments.'
              : 'মাউস বা আঙুল দিয়ে স্লাইডারটি ডানে-বায়ে টেনে চিকিৎসার পূর্বের ও পরের পরিবর্তন স্পষ্টভাবে দেখুন।'
            }
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {BEFORE_AFTER_CASES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCaseIndex === idx
                  ? 'bg-[#0F172A] text-[#D4AF37] shadow-md border border-[#0F172A]'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {lang === 'en' ? c.titleEn : c.titleBn}
            </button>
          ))}
        </div>

        {/* Main Comparison Component */}
        <div className="max-w-4xl mx-auto bg-[#F8FAFC] border border-slate-200 rounded-3xl p-4 sm:p-8 shadow-xl">
          
          {/* Case Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                {lang === 'en' ? currentCase.titleEn : currentCase.titleBn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {lang === 'en' ? currentCase.procedureEn : currentCase.procedureBn} · <span className="font-medium text-emerald-700">{lang === 'en' ? currentCase.timeframeEn : currentCase.timeframeBn}</span>
              </p>
            </div>

            {/* Quick Snap presets with 44px touch targets */}
            <div className="flex items-center gap-1.5 bg-slate-200/80 p-1 rounded-xl text-xs font-medium">
              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg transition-colors cursor-pointer active:scale-95 ${sliderPos < 10 ? 'bg-white shadow text-[#0F172A] font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {lang === 'en' ? 'After' : 'পরে'}
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg transition-colors cursor-pointer active:scale-95 ${sliderPos >= 40 && sliderPos <= 60 ? 'bg-white shadow text-[#0F172A] font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                50/50
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className={`min-h-[44px] px-3.5 py-2 rounded-lg transition-colors cursor-pointer active:scale-95 ${sliderPos > 90 ? 'bg-white shadow text-[#0F172A] font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {lang === 'en' ? 'Before' : 'আগে'}
              </button>
            </div>
          </div>

          {/* Interactive Split-Screen Viewport */}
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[360px] sm:h-[460px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-300 shadow-inner bg-slate-900"
          >
            {/* Background Image: AFTER treatment (full size) */}
            <img
              src={currentCase.afterImg}
              alt="After dental cosmetic treatment result"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* After Tag (bottom right) */}
            <div className="absolute bottom-4 right-4 bg-[#0F172A]/85 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 pointer-events-none">
              {lang === 'en' ? 'AFTER TREATMENT' : 'চিকিৎসার পর'}
            </div>

            {/* Foreground Clipped Image: BEFORE treatment */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentCase.beforeImg}
                alt="Before dental treatment"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%'
                }}
              />

              {/* Before Tag (bottom left) */}
              <div className="absolute bottom-4 left-4 bg-[#0F172A]/85 backdrop-blur-sm text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-amber-500/30">
                {lang === 'en' ? 'BEFORE TREATMENT' : 'চিকিৎসার পূর্বে'}
              </div>
            </div>

            {/* Drag Handle Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#D4AF37] pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Centered Luxury Circular Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0F172A] border-2 border-[#D4AF37] shadow-xl flex items-center justify-center text-amber-300 cursor-ew-resize">
                <ArrowLeftRight className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>

            {/* Magnify Inspection button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomModalOpen(true);
              }}
              className="absolute top-4 right-4 p-2 bg-[#0F172A]/80 hover:bg-[#0F172A] text-white rounded-lg backdrop-blur-sm border border-slate-700 transition-colors cursor-pointer"
              title="Expand View"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Clinical Doctor Commentary */}
          <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700">
              <span className="font-semibold text-[#0F172A]">
                {lang === 'en' ? 'Specialist Clinical Note: ' : 'চিকিৎসকের মন্তব্য: '}
              </span>
              <span>{lang === 'en' ? currentCase.doctorNoteEn : currentCase.doctorNoteBn}</span>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              {lang === 'en' ? 'Ready for your personalized smile transformation?' : 'আপনার হাসির সৌন্দর্যায়ন নিয়ে পরামর্শ করতে চান?'}
            </div>
            <button
              onClick={onOpenBooking}
              className="btn-gold-luxury px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer"
            >
              {lang === 'en' ? 'Consult Our Cosmetic Specialists' : 'কসমেটিক ডাক্তারের পরামর্শ নিন'}
            </button>
          </div>

        </div>

      </div>

      {/* Zoom Modal */}
      {zoomModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-[#0F172A] rounded-2xl p-6 border border-slate-800 text-white">
            <button
              onClick={() => setZoomModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <h4 className="font-serif text-2xl font-bold mb-4 text-[#D4AF37]">
              {lang === 'en' ? currentCase.titleEn : currentCase.titleBn} (Macro Detail)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-amber-300 font-semibold mb-2">BEFORE</div>
                <img
                  src={currentCase.beforeImg}
                  alt="Before"
                  className="rounded-xl w-full h-[320px] object-cover border border-slate-700"
                />
              </div>
              <div>
                <div className="text-xs text-emerald-400 font-semibold mb-2">AFTER</div>
                <img
                  src={currentCase.afterImg}
                  alt="After"
                  className="rounded-xl w-full h-[320px] object-cover border border-slate-700"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
