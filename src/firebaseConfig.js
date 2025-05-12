import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY2,
  authDomain: "popflix-1d058.firebaseapp.com",
  projectId: "popflix-1d058",
  storageBucket: "popflix-1d058.firebasestorage.app",
  messagingSenderId: "496031862991",
  appId: "1:496031862991:web:3b21b73dbd423e39aca7ba",
  measurementId: "G-WQNJJXVGQK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };