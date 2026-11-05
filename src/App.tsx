import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PatientExperience } from './components/PatientExperience';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { CostEstimator } from './components/CostEstimator';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { UserPortalModal } from './components/UserPortalModal';
import { ServiceItem, Language } from './types';
import { CLINIC_INFO } from './data/clinicData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isUserPortalOpen, setIsUserPortalOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [estimateNote, setEstimateNote] = useState<string>('');
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleOpenBooking = (serviceName?: string, note?: string) => {
    setPrefilledService(serviceName || '');
    setEstimateNote(note || '');
    setIsBookingOpen(true);
  };

  const handleSelectServiceDetail = (service: ServiceItem) => {
    setDetailService(service);
  };

  return (
    <AuthProvider>
      <div className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#D4AF37]/20 selection:text-[#0F172A] relative pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] md:pb-0">
        
        {/* 1. Header & Navigation with Auth Status */}
        <Header
          lang={lang}
          onToggleLang={toggleLanguage}
          onOpenBooking={() => handleOpenBooking()}
          onOpenUserPortal={() => setIsUserPortalOpen(true)}
        />

        {/* 2. Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. Interactive Service Highlights */}
        <ServicesSection
          lang={lang}
          onSelectService={handleSelectServiceDetail}
          onBookService={(serviceName) => handleOpenBooking(serviceName)}
        />

        {/* 4. The Patient Experience Interactive Timeline */}
        <PatientExperience
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 5. Before & After Transformation Gallery */}
        <BeforeAfterGallery
          lang={lang}
          onOpenBooking={() => handleOpenBooking('Custom Porcelain Veneers')}
        />

        {/* 6. Interactive Cost Estimator */}
        <CostEstimator
          lang={lang}
          onBookWithEstimate={(serviceName, estimate) => handleOpenBooking(serviceName, estimate)}
        />

        {/* 7. Testimonials & Social Proof (4.6 Google Rating, Firestore Synced) */}
        <Testimonials
          lang={lang}
        />

        {/* 8. Location, Maps & Local FAQs (Sayed Nagar, Vatara) */}
        <LocationContact
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 9. Luxury Footer */}
        <Footer
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Modals */}
        <AppointmentModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          lang={lang}
          initialService={prefilledService}
          initialEstimateNote={estimateNote}
        />

        <ServiceDetailModal
          service={detailService}
          onClose={() => setDetailService(null)}
          lang={lang}
          onBook={(serviceName) => handleOpenBooking(serviceName)}
        />

        <UserPortalModal
          isOpen={isUserPortalOpen}
          onClose={() => setIsUserPortalOpen(false)}
          lang={lang}
        />

        {/* Floating Bottom Quick Bar for Mobile Users (Within 15% mobile viewport cap, Safe Area cleared) */}
        <aside aria-label="Quick appointment and contact actions" className="fixed bottom-0 inset-x-0 z-40 bg-[#0F172A]/95 backdrop-blur-md border-t border-slate-800 px-3 pt-2 pb-[calc(0.6rem+env(safe-area-inset-bottom,0px))] md:hidden flex items-center justify-around gap-2.5 shadow-2xl">
          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="flex-1 min-h-[44px] py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 active:scale-[0.98] transition-transform"
          >
            <Phone className="w-4 h-4" />
            <span>{lang === 'en' ? 'Call' : 'কল'}</span>
          </a>

          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[44px] py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => handleOpenBooking()}
            className="btn-gold-luxury flex-1 min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98] transition-transform"
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'en' ? 'Book' : 'সিরিয়াল'}</span>
          </button>
        </aside>

      </div>
    </AuthProvider>
  );
}
