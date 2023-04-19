
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import {getAuth} from "firebase/app"
// import {getFirestore} from "firebase/firestore"
// import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDmrXpkm5n32Qt50jaTnO4aLMm3Ax7uz2E",
  authDomain: "emergencysos-23f20.firebaseapp.com",
  projectId: "emergencysos-23f20",
  storageBucket: "emergencysos-23f20.appspot.com",
  messagingSenderId: "229470470913",
  appId: "1:229470470913:web:651d4e43bd4021cd9dd100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)