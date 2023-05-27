// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Gg22WsiQCroCp3DOf4FhG5Z4-SH_z8Q",
  authDomain: "react-netflix-clone-sdy.firebaseapp.com",
  projectId: "react-netflix-clone-sdy",
  storageBucket: "react-netflix-clone-sdy.appspot.com",
  messagingSenderId: "1013377241772",
  appId: "1:1013377241772:web:e0bcea98bbf08fc0600509",
  measurementId: "G-YQP2YZ4FP3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
