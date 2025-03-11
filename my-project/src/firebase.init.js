// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9K6KoTAQWeHvX1WR51jV2_POsMSBxfws",
  authDomain: "auth-email-password-login.firebaseapp.com",
  projectId: "auth-email-password-login",
  storageBucket: "auth-email-password-login.firebasestorage.app",
  messagingSenderId: "700394535327",
  appId: "1:700394535327:web:8fba72b71718d28f56e5aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;