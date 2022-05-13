// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCztpBQ6XhQ-WSlr0ue0iHIbEj_AEY0kN8",
  authDomain: "burger-queen-9c4ff.firebaseapp.com",
  projectId: "burger-queen-9c4ff",
  storageBucket: "burger-queen-9c4ff.appspot.com",
  messagingSenderId: "247655007675",
  appId: "1:247655007675:web:e004df73152ab49f93709e",
  measurementId: "G-39KS0TH9TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

