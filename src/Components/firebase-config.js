import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8c6s9QpJV73if-t1Rx1Yqgfa2YjuvYZ8",
  authDomain: "wittpoportal.firebaseapp.com",
  projectId: "wittpoportal",
  storageBucket: "wittpoportal.appspot.com",
  messagingSenderId: "59305104966",
  appId: "1:59305104966:web:dda8cf29998bc4f9095c47",
  measurementId: "G-9T7E6YV1XS"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);

