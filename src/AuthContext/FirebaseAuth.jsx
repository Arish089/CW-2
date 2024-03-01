// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCTxG_mESNt0Z5orhXaB_x_EudPVKSHuEQ",
  authDomain: "construct-week2.firebaseapp.com",
  projectId: "construct-week2",
  storageBucket: "construct-week2.appspot.com",
  messagingSenderId: "440281656748",
  appId: "1:440281656748:web:b9d7138125575221739e09"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
