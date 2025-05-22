import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3FT7YOXO10r81CVXQZoaPQ2M7AZQllBI",
  authDomain: "portfolio-beeda.firebaseapp.com",
  projectId: "portfolio-beeda",
  storageBucket: "portfolio-beeda.firebasestorage.app",
  messagingSenderId: "1059437089540",
  appId: "1:1059437089540:web:be577207af9e9e1181f651",
  measurementId: "G-CHCXN07JCG",
};

const app = initializeApp(firebaseConfig);

export { app };
