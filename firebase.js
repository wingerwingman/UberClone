// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "uber-clone-f2cca.firebaseapp.com",
  projectId: "uber-clone-f2cca",
  storageBucket: "uber-clone-f2cca.appspot.com",
  messagingSenderId: "808877669065",
  appId: "1:808877669065:web:d37028a289fe9bb29b2b18",
  measurementId: "G-FYVS35YH49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, analytics, provider, auth };