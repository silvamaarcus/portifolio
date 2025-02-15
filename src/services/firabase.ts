import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDStNMEH3fDHQotmwrNyqnrGlJujT4MYbs",
  authDomain: "portifolio-7e2e2.firebaseapp.com",
  projectId: "portifolio-7e2e2",
  storageBucket: "portifolio-7e2e2.firebasestorage.app",
  messagingSenderId: "778809394263",
  appId: "1:778809394263:web:badc697749c15fa7bb4f12",
  measurementId: "G-R3P8WXPTKL"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
