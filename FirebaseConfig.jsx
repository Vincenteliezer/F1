// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDytYDtblZ4orEdWhSc89O1VR_FKyiKSHw",
  authDomain: "efa-app-a137f.firebaseapp.com",
  projectId: "efa-app-a137f",
  storageBucket: "efa-app-a137f.appspot.com",
  messagingSenderId: "954913726716",
  appId: "1:954913726716:web:ee2c229a5cc5b6b0a43779",
  measurementId: "G-XQWW63QHKF"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_AUTH);
// export const analytics = getAnalytics(app);