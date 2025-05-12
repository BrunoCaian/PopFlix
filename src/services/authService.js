
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from '../firebaseConfig';

export const loginWithEmail = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const registerWithEmail = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

export const loginWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider);
  return userCredential.user;
};

