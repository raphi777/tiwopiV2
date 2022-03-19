// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Rt7g9DvKnlcFHMDk2uHSRdvPVGLv85g",
  authDomain: "tiwopiv2.firebaseapp.com",
  projectId: "tiwopiv2",
  storageBucket: "tiwopiv2.appspot.com",
  messagingSenderId: "221425029054",
  appId: "1:221425029054:web:6fd1caaa9915ba2ddd33ef",
  measurementId: "G-CV81PJD3TT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);