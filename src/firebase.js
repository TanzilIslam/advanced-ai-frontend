// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chatbase-71f44.firebaseapp.com",
  projectId: "chatbase-71f44",
  storageBucket: "chatbase-71f44.appspot.com",
  messagingSenderId: "662781457330",
  appId: "1:662781457330:web:c1b76719178554759eaaab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);