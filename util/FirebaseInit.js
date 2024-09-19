// In this file we will initialize our firebase database

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz5AoXSiL2b3bdGSLEcJsCN1lBicT5lK0",
  authDomain: "todo-34a23.firebaseapp.com",
  projectId: "todo-34a23",
  storageBucket: "todo-34a23.appspot.com",
  messagingSenderId: "514055955084",
  appId: "1:514055955084:web:57d4b9ea8e7f1f778c11a9",
  measurementId: "G-FN083V21ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);