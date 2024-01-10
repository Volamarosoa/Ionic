import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import app from '../firebase/firebase';

interface AuthentificationType {
  currentUser: any; 
  signup: (email: string, password: string) => Promise<User | null>;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateEmailOnly: (email: string) => Promise<void>;
  updatePasswordOnly: (currentPassword: string, newPassword: string) => Promise<void>;
  signInWithGoogle: () => Promise<User | null>;
}

// Create the context
const Authentification = createContext<AuthentificationType | null>(null);
const auth = getAuth(app);

export const useAuth = (): AuthentificationType => {
    const authContext = useContext(Authentification);
  
    if (!authContext) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return authContext;
  };

export const AuthentificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signup = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  };

  const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  };

  const logout = async () => {
    await signOut(auth);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const reauthenticate = async (currentPassword: string) => {
    const credentials = EmailAuthProvider.credential(currentUser.email, currentPassword);
    await reauthenticateWithCredential(currentUser, credentials);
  };

  const updateEmailOnly = async (email: string) => {
    console.log("Mise à jour de l'e-mail en cours...");
    await updateEmail(currentUser, email);
  };

  const updatePasswordOnly = async (currentPassword: string, newPassword: string) => {
    try {
      await reauthenticate(currentPassword);
      await updatePassword(currentUser, newPassword);
      console.log("Mot de passe mis à jour avec succès !");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du mot de passe :", error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    const userCredential = await signInWithPopup(auth, googleProvider);
    return userCredential.user;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value: AuthentificationType = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmailOnly,
    updatePasswordOnly,
    signInWithGoogle,
  };

  return (
    <Authentification.Provider value={value}>
      {!loading && children}
    </Authentification.Provider>
  );
};

export default AuthentificationProvider;
