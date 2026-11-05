import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firestoreErrors';
import { ReviewItem } from '../types';
import { REVIEWS_LIST } from '../data/clinicData';

const REVIEWS_PATH = 'reviews';

export function subscribeReviews(onUpdate: (reviews: ReviewItem[]) => void): () => void {
  return onSnapshot(
    collection(db, REVIEWS_PATH),
    (snapshot) => {
      if (snapshot.empty) {
        onUpdate(REVIEWS_LIST);
        return;
      }
      const firestoreReviews: ReviewItem[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: data.id || docSnap.id,
          author: data.authorName || 'Verified Patient',
          authorLocation: data.authorLocation || 'Sayed Nagar, Vatara',
          rating: data.rating || 5,
          date: 'Recent visit',
          serviceCategory: data.serviceCategory || 'dental',
          textEn: data.text || '',
          textBn: data.text || '',
          verified: data.verified ?? true,
          highlight: data.highlight || 'Verified Clinic Visit'
        };
      });

      // Merge newly added Firestore reviews with baseline reviews
      const existingIds = new Set(firestoreReviews.map(r => r.id));
      const baseline = REVIEWS_LIST.filter(r => !existingIds.has(r.id));
      onUpdate([...firestoreReviews, ...baseline]);
    },
    (error) => {
      console.warn('Reviews listener fallback:', error);
      onUpdate(REVIEWS_LIST);
    }
  );
}

export async function createFirestoreReview(review: {
  id: string;
  authorId?: string;
  authorName: string;
  authorLocation?: string;
  rating: number;
  serviceCategory: 'dental' | 'physio';
  text: string;
  highlight?: string;
}): Promise<void> {
  const docRef = doc(db, REVIEWS_PATH, review.id);
  const payload = {
    id: review.id,
    authorId: review.authorId || 'guest',
    authorName: review.authorName,
    authorLocation: review.authorLocation || 'Sayed Nagar, Vatara, Dhaka',
    rating: review.rating,
    serviceCategory: review.serviceCategory,
    text: review.text,
    highlight: review.highlight || 'Verified Patient Feedback',
    verified: true,
    createdAt: serverTimestamp()
  };

  try {
    await setDoc(docRef, payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `${REVIEWS_PATH}/${review.id}`);
  }
}
