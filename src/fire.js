// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBskNPKyfwU4GvIQ9L5lg0VbmlJPeuxRQQ",
  authDomain: "afcentralfront.firebaseapp.com",
  projectId: "afcentralfront",
  storageBucket: "afcentralfront.appspot.com",
  messagingSenderId: "588287882483",
  appId: "1:588287882483:web:bdfd0b7ed2293b7124f386",
  measurementId: "G-2DQW42F2GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth};