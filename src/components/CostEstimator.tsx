import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface CostEstimatorProps {
  lang: Language;
  onBookWithEstimate: (serviceName: string, estimateText: string) => void;
}

interface ProcedureRate {
  id: string;
  nameEn: string;
  nameBn: string;
  category: 'dental' | 'physio';
  basePrice: number;
  unitEn: string;
  unitBn: string;
  defaultQty: number;
  maxQty: number;
  inclusionsEn: string[];
  inclusionsBn: string[];
}

const PROCEDURES: ProcedureRate[] = [
  {
    id: 'scaling',
    nameEn: 'Ultrasonic Scaling & Air Polish',
    nameBn: 'আল্ট্রাসনিক স্কেলিং ও এয়ার পলিশিং',
    category: 'dental',
    basePrice: 1800,
    unitEn: 'Full Mouth Session',
    unitBn: 'ফুল মাউথ সেশন',
    defaultQty: 1,
    maxQty: 2,
    inclusionsEn: ['Complete oral plaque & tartar removal', 'Stain removal air polishing', 'Fluoride enamel coating'],
    inclusionsBn: ['দাঁতের সমস্ত পাথর ও প্লাক পরিষ্কার', 'চা-কফির দাগ দূরীকরণ পলিশ', 'ফ্লোরাইড এনামেল কোটিং']
  },
  {
    id: 'whitening',
    nameEn: 'Laser Cold-Light Teeth Whitening',
    nameBn: 'লেজার টিথ হোয়াইটেনিং',
    category: 'dental',
    basePrice: 7500,
    unitEn: 'Full Arch Procedure',
    unitBn: 'ফুল আর্চ প্রসিডিউর',
    defaultQty: 1,
    maxQty: 2,
    inclusionsEn: ['6 to 8 shades visible brightening', 'Enamel desensitizing therapy', 'Complimentary touch-up pen'],
    inclusionsBn: ['৬-৮ শেড তাৎক্ষণিক উজ্জ্বলতা', 'শিরশির রোধক বিশেষ থেরাপি', 'হোম টাচ-আপ প্রিমিয়াম কিট']
  },
  {
    id: 'rct',
    nameEn: 'Rotary Pain-Free Root Canal (RCT)',
    nameBn: 'ব্যথামুক্ত রোটারি রুট ক্যানেল (RCT)',
    category: 'dental',
    basePrice: 4500,
    unitEn: 'Tooth',
    unitBn: 'দাঁত',
    defaultQty: 1,
    maxQty: 6,
    inclusionsEn: ['Computer-buffered painless anesthesia', 'Digital apex locator root cleansing', 'Permanent hermetic seal'],
    inclusionsBn: ['ব্যথাহীন আধুনিক অ্যানেসথেসিয়া', 'কম্পিউটারাইজড রুট ক্যানেল ড্রেনিং', 'স্থায়ী অ্যান্টিব্যাকটেরিয়াল সিল']
  },
  {
    id: 'zirconia',
    nameEn: 'CAD/CAM Solid Zirconia Crown',
    nameBn: 'জারকোনিয়া ডেন্টাল ক্যাপ/ক্রাউন',
    category: 'dental',
    basePrice: 8500,
    unitEn: 'Crown Unit',
    unitBn: 'টিথ ইউনিট',
    defaultQty: 1,
    maxQty: 8,
    inclusionsEn: ['3D digital intraoral scanning', 'Custom ceramic color gradation', '5-year clinic warranty certificate'],
    inclusionsBn: ['৩ডি ডিজিটাল স্ক্যান ও মাপ', 'প্রাকৃতিক রঙের নিখুঁত ম্যাচিং', '৫ বছরের ক্লিনিক্যাল নিশ্চয়তাপত্র']
  },
  {
    id: 'veneers',
    nameEn: 'Handcrafted Porcelain Veneers',
    nameBn: 'প্রিমিয়াম পোরসেলিন ভেনিয়ার',
    category: 'dental',
    basePrice: 15000,
    unitEn: 'Tooth',
    unitBn: 'দাঁত',
    defaultQty: 4,
    maxQty: 10,
    inclusionsEn: ['Digital Hollywood smile design', 'Micro-thin enamel preservation', 'High-gloss optical polish'],
    inclusionsBn: ['ডিজিটাল স্মাইল ডিজাইন প্ল্যান', 'দাঁত অক্ষুণ্ণ রেখে মাইক্রো-প্রিপ', 'উজ্জ্বল সিরামিক ফিনিশিং']
  },
  {
    id: 'tmj',
    nameEn: 'TMJ Jaw Joint & Face Physiotherapy',
    nameBn: 'টিএমজে চোয়ালের ব্যথা ফিজিওথেরাপি',
    category: 'physio',
    basePrice: 1500,
    unitEn: 'Session',
    unitBn: 'সেশন',
    defaultQty: 3,
    maxQty: 10,
    inclusionsEn: ['Pterygoid deep tissue mobilization', 'Therapeutic ultrasound electrotherapy', 'Home posture retraining regimen'],
    inclusionsBn: ['চোয়ালের পেশীর ম্যানুয়াল থেরাপি', 'থেরাপিউটিক আল্ট্রাসাউন্ড প্রয়োগ', 'ভঙ্গি সংশোধনের ঘরোয়া ব্যায়াম']
  },
  {
    id: 'spine',
    nameEn: 'Cervical / Lumbar Spine Rehabilitation',
    nameBn: 'ঘাড় ও কোমরের স্পাইন রিহ্যাবিলিটেশন',
    category: 'physio',
    basePrice: 1200,
    unitEn: 'Session',
    unitBn: 'সেশন',
    defaultQty: 4,
    maxQty: 12,
    inclusionsEn: ['Gentle spinal decompression traction', 'Interferential therapy (IFT)', 'Core muscular stabilization coaching'],
    inclusionsBn: ['স্পাইনাল নার্ভের চাপ কমানোর ট্র্যাকশন', 'আইএফটি ও আধুনিক হিট থেরাপি', 'কোর মাসল শক্তিশালী করার ব্যায়াম']
  }
];

export const CostEstimator: React.FC<CostEstimatorProps> = ({ lang, onBookWithEstimate }) => {
  const [selectedId, setSelectedId] = useState<string>('rct');
  const [quantity, setQuantity] = useState<number>(1);

  const selectedProc = PROCEDURES.find(p => p.id === selectedId) || PROCEDURES[0];
  const totalPrice = selectedProc.basePrice * quantity;

  const handleProcedureChange = (id: string) => {
    setSelectedId(id);
    const proc = PROCEDURES.find(p => p.id === id);
    if (proc) {
      setQuantity(proc.defaultQty);
    }
  };

  const handleBook = () => {
    const serviceName = lang === 'en' ? selectedProc.nameEn : selectedProc.nameBn;
    const estimateText = `Estimated: BDT ৳${totalPrice.toLocaleString()} (${quantity} ${lang === 'en' ? selectedProc.unitEn : selectedProc.unitBn})`;
    onBookWithEstimate(serviceName, estimateText);
  };

  return (
    <section id="estimator" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A88B2A] uppercase">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{lang === 'en' ? 'Transparent Healthcare' : 'স্বচ্ছ ও সাশ্রয়ী খরচ'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight">
            {lang === 'en' ? 'Interactive Treatment Cost Estimator' : 'চিকিৎসা খরচের সহজ হিসাব'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Calculate estimated costs with zero hidden charges. Select your desired treatment and customize the count.'
              : 'কোনো লুকানো খরচ ছাড়া চিকিৎসার সম্ভাব্য খরচের হিসাব করে সরাসরি অ্যাপয়েন্টমেন্ট নিশ্চিত করুন।'
            }
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Options */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  {lang === 'en' ? '1. Select Dental or Physiotherapy Treatment:' : '১. চিকিৎসার ধরন নির্বাচন করুন:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PROCEDURES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleProcedureChange(p.id)}
                      className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        selectedId === p.id
                          ? 'border-[#D4AF37] bg-amber-500/10 text-[#0F172A] font-semibold ring-1 ring-[#D4AF37]'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <div className="truncate">{lang === 'en' ? p.nameEn : p.nameBn}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        ৳{p.basePrice.toLocaleString()} / {lang === 'en' ? p.unitEn : p.unitBn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  {lang === 'en' ? `2. Number of ${selectedProc.unitEn}:` : `২. সংখ্যা বা সেশন নির্বাচন:`}
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-700 hover:bg-slate-200 font-bold transition-colors cursor-pointer active:bg-slate-300"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="min-w-[48px] text-center px-3 py-2 font-bold text-slate-900 text-base tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(selectedProc.maxQty, quantity + 1))}
                      className="min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-700 hover:bg-slate-200 font-bold transition-colors cursor-pointer active:bg-slate-300"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500">
                    ({quantity} × ৳{selectedProc.basePrice.toLocaleString()})
                  </span>
                </div>
              </div>

              {/* What is included */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                  {lang === 'en' ? 'Included at Khan Dental & Physio:' : 'সেবায় যা যা অন্তর্ভুক্ত থাকবে:'}
                </span>
                <div className="space-y-1.5">
                  {(lang === 'en' ? selectedProc.inclusionsEn : selectedProc.inclusionsBn).map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{lang === 'en' ? 'Complimentary 14-day recovery follow-up' : 'চিকিৎসা পরবর্তী ১৪ দিনের ফ্রি চেকআপ'}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 shadow-xl">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>{lang === 'en' ? 'ESTIMATED TOTAL' : 'মোট সম্ভাব্য খরচ'}</span>
                  <span className="text-[#D4AF37] font-semibold">{lang === 'en' ? 'Transparent BDT' : 'বাংলাদেশি টাকা'}</span>
                </div>

                <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2 tabular-nums">
                  ৳{totalPrice.toLocaleString()}
                </div>

                <p className="text-xs text-amber-200/90 leading-relaxed mb-6">
                  {lang === 'en'
                    ? `For ${quantity} ${selectedProc.unitEn} of ${selectedProc.nameEn}. Final confirmation after initial clinical exam.`
                    : `${quantity} ${selectedProc.unitBn} (${selectedProc.nameBn}) এর জন্য আনুমানিক হিসাব।`}
                </p>

                <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{lang === 'en' ? 'Registration / File:' : 'ফাইল ফি:'}</span>
                    <span className="text-emerald-400 font-medium">{lang === 'en' ? 'FREE' : 'ফ্রি'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{lang === 'en' ? 'Digital X-ray Review:' : 'ডিজিটাল এক্স-রে পর্যালোচনা:'}</span>
                    <span className="text-emerald-400 font-medium">{lang === 'en' ? 'INCLUDED' : 'অন্তর্ভুক্ত'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{lang === 'en' ? 'Clinic Hours:' : 'চেম্বার সময়:'}</span>
                    <span>5:00 PM – 10:30 PM</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBook}
                className="btn-gold-luxury w-full py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{lang === 'en' ? 'Book with this Estimate' : 'এই খরচে সিরিয়াল দিন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
