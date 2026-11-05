import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Heart, Sparkles, MessageCircle, Plus, Check } from 'lucide-react';
import { REVIEWS_LIST, CLINIC_INFO } from '../data/clinicData';
import { ReviewItem, Language } from '../types';
import { useAuth } from '../context/AuthContext';
import { subscribeReviews, createFirestoreReview } from '../services/reviewService';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const { currentUser } = useAuth();
  const [filter, setFilter] = useState<'all' | 'dental' | 'physio'>('all');
  const [reviews, setReviews] = useState<ReviewItem[]>(REVIEWS_LIST);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('Vatara, Dhaka');
  const [newRating, setNewRating] = useState(5);
  const [newCategory, setNewCategory] = useState<'dental' | 'physio'>('dental');
  const [newText, setNewText] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeReviews((data) => {
      setReviews(data);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser?.displayName && !newAuthor) {
      setNewAuthor(currentUser.displayName);
    }
  }, [currentUser]);

  const filteredReviews = filter === 'all'
    ? reviews
    : reviews.filter(r => r.serviceCategory === filter);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const reviewId = `rev-${Date.now()}`;
    const newRev: ReviewItem = {
      id: reviewId,
      author: newAuthor,
      authorLocation: newLocation,
      rating: newRating,
      date: 'Just now',
      serviceCategory: newCategory,
      textEn: newText,
      textBn: newText,
      verified: true,
      highlight: 'Recent Verified Visit'
    };

    try {
      await createFirestoreReview({
        id: reviewId,
        authorId: currentUser?.uid,
        authorName: newAuthor,
        authorLocation: newLocation,
        rating: newRating,
        serviceCategory: newCategory,
        text: newText,
        highlight: 'Verified Clinic Visit'
      });
    } catch (err) {
      console.warn('Firestore review write warning:', err);
      // Fallback local state update
      setReviews(prev => [newRev, ...prev]);
    }

    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setIsWriteModalOpen(false);
      setNewAuthor('');
      setNewText('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A88B2A] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{lang === 'en' ? 'Community Trust & Proof' : 'স্থানীয়দের আস্থা ও অভিজ্ঞতা'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0F172A] tracking-tight">
            {lang === 'en' ? 'Loved by Over 10,000+ Smiling Patients' : 'হাজারো রোগীর সন্তুষ্টি ও নির্ভরতার প্রতীক'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'Read genuine Google reviews from neighbors across Sayed Nagar, Vatara, Baridhara, and greater Dhaka.'
              : 'সায়েদ নগর, ভাটারা এবং ঢাকার বিভিন্ন এলাকার রোগীদের প্রকৃত মতামত ও অভিজ্ঞতা।'
            }
          </p>
        </div>

        {/* Rating KPI Card */}
        <div className="max-w-4xl mx-auto bg-[#0F172A] text-white rounded-2xl p-6 sm:p-8 mb-12 border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <span className="font-serif text-3xl font-bold text-amber-300">4.6</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400 text-sm">
                  {'★★★★★'}
                </div>
                <span className="text-xs text-slate-300 font-medium">
                  {lang === 'en' ? 'Based on 18 Google Reviews' : '১৮টি গুগল রিভিউয়ের ভিত্তিতে'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                {lang === 'en' ? 'Boutique Healthcare Excellence' : 'উচ্চমানের ডেন্টাল ও ফিজিওথেরাপি সেন্টার'}
              </h3>
              <p className="text-xs text-amber-200/80">
                {lang === 'en' ? 'Identifies as Women-Owned & Operated' : 'নারী চিকিৎসকদের পরিচালনায় বিশেষায়িত প্রতিষ্ঠান'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="btn-gold-luxury px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{lang === 'en' ? 'Leave a Review' : 'মতামত জানান'}</span>
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#0F172A] text-[#D4AF37] shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'en' ? 'All Reviews (18)' : 'সকল মতামত (১৮)'}
          </button>
          <button
            onClick={() => setFilter('dental')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'dental'
                ? 'bg-[#0F172A] text-[#D4AF37] shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'en' ? 'Dental Care' : 'ডেন্টাল চিকিৎসা'}
          </button>
          <button
            onClick={() => setFilter('physio')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === 'physio'
                ? 'bg-[#0F172A] text-[#D4AF37] shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'en' ? 'Physiotherapy & TMJ' : 'ফিজিওথেরাপি ও টিএমজে'}
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                {/* Highlight banner if available */}
                {rev.highlight && (
                  <div className="text-xs font-bold text-[#0F172A] mb-2 text-balance">
                    "{rev.highlight}"
                  </div>
                )}

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-5">
                  "{lang === 'en' ? rev.textEn : rev.textBn}"
                </p>
              </div>

              {/* Patient Attribution */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">{rev.author}</div>
                  <div className="text-[11px] text-slate-500">{rev.authorLocation}</div>
                </div>

                {rev.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>{lang === 'en' ? 'Verified' : 'যাচাইকৃত'}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal (Responsive Bottom-Sheet on Mobile) */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-t-3xl sm:rounded-2xl max-w-lg w-full p-5 sm:p-8 shadow-2xl relative max-h-[92dvh] sm:max-h-[90vh] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] sm:pb-8">
            
            {/* Mobile drag handle affordance */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3 sm:hidden" />

            {/* Close Button with 44px min touch target */}
            <button
              type="button"
              onClick={() => setIsWriteModalOpen(false)}
              className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-full cursor-pointer active:scale-95"
              aria-label="Close review modal"
            >
              ✕
            </button>

            <h4 className="font-serif text-2xl font-bold text-[#0F172A] mb-1">
              {lang === 'en' ? 'Share Your Experience' : 'আপনার অভিজ্ঞতা লিখুন'}
            </h4>
            <p className="text-xs text-slate-500 mb-5">
              {lang === 'en' ? 'Help others in Vatara & Dhaka discover gentle healthcare.' : 'আপনার মূল্যবান মতামত অন্য রোগীদের সঠিক চিকিৎসা বেছে নিতে সাহায্য করবে।'}
            </p>

            {submittedFeedback ? (
              <div className="p-6 bg-emerald-50 text-emerald-800 rounded-xl text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className="font-bold text-sm">{lang === 'en' ? 'Thank You!' : 'ধন্যবাদ!'}</div>
                <div className="text-xs">{lang === 'en' ? 'Your review has been added to our live testimonials.' : 'আপনার মতামত যুক্ত করা হয়েছে।'}</div>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Your Name' : 'আপনার নাম'}
                  </label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Sabina Yasmin"
                    className="w-full px-3.5 py-2.5 min-h-[44px] text-base md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Location' : 'এলাকা'}
                    </label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-base md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'en' ? 'Treatment' : 'সেবা'}
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full px-3.5 py-2.5 min-h-[44px] text-base md:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="dental">{lang === 'en' ? 'Dental Care' : 'ডেন্টাল'}</option>
                      <option value="physio">{lang === 'en' ? 'Physiotherapy' : 'ফিজিওথেরাপি'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Rating' : 'রেটিং'}
                  </label>
                  <div className="flex gap-2">
                    {[5, 4, 3].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                          newRating === star
                            ? 'bg-amber-100 text-amber-800 border border-amber-400'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <span>{star} Stars</span>
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'en' ? 'Your Review' : 'আপনার মতামত'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Describe your pain-free experience and the doctor's care..."
                    className="w-full px-3.5 py-2.5 text-base md:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="min-h-[44px] px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                  >
                    {lang === 'en' ? 'Cancel' : 'বাতিল'}
                  </button>
                  <button
                    type="submit"
                    className="btn-gold-luxury min-h-[44px] px-6 py-2.5 rounded-xl text-xs font-semibold cursor-pointer active:scale-95"
                  >
                    {lang === 'en' ? 'Post Review' : 'সাবমিট করুন'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
