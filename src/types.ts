export type Language = 'en' | 'bn';

export interface ServiceItem {
  id: string;
  category: 'cosmetic' | 'general' | 'ortho' | 'physio';
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  benefitsEn: string[];
  benefitsBn: string[];
  duration: string;
  painLevel: 'Zero-Pain' | 'Minimal / Mild' | 'Comfortable';
  priceRange: string;
  procedureStepsEn: string[];
  procedureStepsBn: string[];
  icon: string;
  isPopular?: boolean;
}

export interface BeforeAfterCase {
  id: string;
  titleEn: string;
  titleBn: string;
  procedureEn: string;
  procedureBn: string;
  timeframeEn: string;
  timeframeBn: string;
  detailsEn: string;
  detailsBn: string;
  beforeImg: string;
  afterImg: string;
  doctorNoteEn: string;
  doctorNoteBn: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  authorLocation: string;
  rating: number;
  date: string;
  serviceCategory: 'dental' | 'physio';
  textEn: string;
  textBn: string;
  verified: boolean;
  highlight?: string;
}

export interface AppointmentData {
  id: string;
  patientName: string;
  phone: string;
  email?: string;
  serviceCategory: 'cosmetic' | 'general' | 'ortho' | 'physio';
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  specialistPreference: string;
  symptoms?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending Review' | 'Completed' | 'Cancelled';
}

export interface ExperienceStep {
  step: string;
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  amenitiesEn: string[];
  amenitiesBn: string[];
  icon: string;
}
