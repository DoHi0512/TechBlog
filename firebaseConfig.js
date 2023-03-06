// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkdfCz7Rzy2790O5o4iLfecEcX4Kiv93Q",
  authDomain: "techblog-fc53e.firebaseapp.com",
  projectId: "techblog-fc53e",
  storageBucket: "techblog-fc53e.appspot.com",
  messagingSenderId: "762538759040",
  appId: "1:762538759040:web:44c49978757e2b9ddbe765",
  measurementId: "G-6QNCWKENX6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);
export { auth, app, db };
