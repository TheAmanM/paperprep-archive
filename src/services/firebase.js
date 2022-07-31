// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from '@firebase/firestore'
import {getPerformance} from '@firebase/performance'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "REDACTED",
  authDomain: "paper-prep.firebaseapp.com",
  projectId: "paper-prep",
  storageBucket: "paper-prep.appspot.com",
  messagingSenderId: "954760299274",
  appId: "1:954760299274:web:1750c711565ea1693930f3",
  measurementId: "G-H5T2S2QKR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const performance = getPerformance(app);

export const db = getFirestore(app);
export const emailsRef = collection(db, 'emails')

export default app