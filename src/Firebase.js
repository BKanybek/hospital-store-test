import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKAxykmfR923NllqJ3Yf87hZvVPv0NNmg",
  authDomain: "solo-project-70350.firebaseapp.com",
  projectId: "solo-project-70350",
  storageBucket: "solo-project-70350.appspot.com",
  messagingSenderId: "78358782372",
  appId: "1:78358782372:web:202db4578dcbcf98cce131"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)