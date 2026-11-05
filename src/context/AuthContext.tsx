import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firestoreErrors';

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'user' | 'admin';
  phone?: string;
  createdAt?: any;
  updatedAt?: any;
}

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: UserProfile | null;
  isAdmin: boolean;
  loading: boolean;
  authReady: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const ADMIN_EMAILS = ['pricedianaj@gmail.com'];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authReady, setAuthReady] = useState<boolean>(false);

  const isAdmin = Boolean(
    currentUser?.email && (
      ADMIN_EMAILS.includes(currentUser.email.toLowerCase()) ||
      userProfile?.role === 'admin'
    )
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        try {
          const snapshot = await getDoc(userDocRef);
          if (snapshot.exists()) {
            setUserProfile(snapshot.data() as UserProfile);
          } else {
            // Initialize new user profile
            const isInitialAdmin = user.email ? ADMIN_EMAILS.includes(user.email.toLowerCase()) : false;
            const newProfile: UserProfile = {
              id: user.uid,
              email: user.email || '',
              displayName: user.displayName || 'Patient',
              photoURL: user.photoURL || '',
              role: isInitialAdmin ? 'admin' : 'user',
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            };
            await setDoc(userDocRef, newProfile);
            setUserProfile(newProfile);
          }
        } catch (error) {
          console.warn('Profile fetch warning (using fallback profile):', error);
          setUserProfile({
            id: user.uid,
            email: user.email || '',
            displayName: user.displayName || 'Patient',
            photoURL: user.photoURL || '',
            role: user.email && ADMIN_EMAILS.includes(user.email.toLowerCase()) ? 'admin' : 'user'
          });
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      // User closing the popup, clicking away, or concurrent popup cancellation
      // is a normal user cancellation action, not an application crash.
      if (
        error?.code === 'auth/popup-closed-by-user' ||
        error?.code === 'auth/cancelled-popup-request' ||
        error?.code === 'auth/popup-blocked' ||
        (typeof error?.message === 'string' && error.message.includes('popup-closed-by-user'))
      ) {
        return;
      }
      console.warn('Google Sign-in status:', error?.message || error);
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUserProfile(null);
    } catch (error) {
      console.error('Sign out error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        isAdmin,
        loading,
        authReady,
        signInWithGoogle,
        signOutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
