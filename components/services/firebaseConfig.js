import Firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: "portfolio-88924",
  storageBucket: "portfolio-88924.appspot.com",
  messagingSenderId: "1070143459327",
  appId: "1:1070143459327:web:ade21a507262eced0621ca",
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;
