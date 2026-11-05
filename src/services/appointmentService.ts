import {
  collection,
  doc,
  setDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firestoreErrors';
import { AppointmentData } from '../types';

const APPOINTMENTS_PATH = 'appointments';

export async function createFirestoreAppointment(appointment: {
  id: string;
  userId: string;
  patientName: string;
  phone: string;
  serviceCategory: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  specialistPreference?: string;
  symptoms?: string;
}): Promise<void> {
  const docRef = doc(db, APPOINTMENTS_PATH, appointment.id);
  const payload = {
    id: appointment.id,
    userId: appointment.userId,
    patientName: appointment.patientName,
    phone: appointment.phone,
    serviceCategory: appointment.serviceCategory,
    serviceName: appointment.serviceName,
    preferredDate: appointment.preferredDate,
    preferredTime: appointment.preferredTime,
    specialistPreference: appointment.specialistPreference || 'Any Specialist',
    symptoms: appointment.symptoms || '',
    status: 'Confirmed',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  try {
    await setDoc(docRef, payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${APPOINTMENTS_PATH}/${appointment.id}`);
  }
}

export function subscribeUserAppointments(
  userId: string,
  onUpdate: (items: AppointmentData[]) => void
): () => void {
  const q = query(
    collection(db, APPOINTMENTS_PATH),
    where('userId', '==', userId)
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const results: AppointmentData[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: data.id || docSnap.id,
          patientName: data.patientName || 'Patient',
          phone: data.phone || '',
          serviceCategory: data.serviceCategory || 'general',
          serviceName: data.serviceName || 'Consultation',
          preferredDate: data.preferredDate || '',
          preferredTime: data.preferredTime || '',
          specialistPreference: data.specialistPreference || 'Specialist',
          symptoms: data.symptoms || '',
          status: data.status || 'Confirmed',
          createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toISOString() : new Date().toISOString()
        };
      });
      onUpdate(results);
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, APPOINTMENTS_PATH);
    }
  );
}

export function subscribeAllAppointments(
  onUpdate: (items: AppointmentData[]) => void
): () => void {
  const q = query(
    collection(db, APPOINTMENTS_PATH)
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const results: AppointmentData[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: data.id || docSnap.id,
          patientName: data.patientName || 'Patient',
          phone: data.phone || '',
          serviceCategory: data.serviceCategory || 'general',
          serviceName: data.serviceName || 'Consultation',
          preferredDate: data.preferredDate || '',
          preferredTime: data.preferredTime || '',
          specialistPreference: data.specialistPreference || 'Specialist',
          symptoms: data.symptoms || '',
          status: data.status || 'Confirmed',
          createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toISOString() : new Date().toISOString()
        };
      });
      onUpdate(results);
    },
    (error) => {
      handleFirestoreError(error, OperationType.GET, APPOINTMENTS_PATH);
    }
  );
}

export async function updateAppointmentStatus(
  id: string,
  status: 'Confirmed' | 'Pending Review' | 'Completed' | 'Cancelled'
): Promise<void> {
  const docRef = doc(db, APPOINTMENTS_PATH, id);
  try {
    await updateDoc(docRef, {
      status,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `${APPOINTMENTS_PATH}/${id}`);
  }
}
