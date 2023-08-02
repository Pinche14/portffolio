
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH68nNTMc7WHwOrArO_oN4ipUy4JzqwXA",
  authDomain: "shubham-portfolio-e72e9.firebaseapp.com",
  projectId: "shubham-portfolio-e72e9",
  storageBucket: "shubham-portfolio-e72e9.appspot.com",
  messagingSenderId: "754969195109",
  appId: "1:754969195109:web:dc7871ceee7da472eb0c8c",
  measurementId: "G-GQWYWL7KR1"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore()