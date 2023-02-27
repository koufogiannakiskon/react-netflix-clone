import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_-YO8Ge5SIedazPRdzF7vEThpzmBIfh8",
  authDomain: "react-netflix-clone-b9f75.firebaseapp.com",
  projectId: "react-netflix-clone-b9f75",
  storageBucket: "react-netflix-clone-b9f75.appspot.com",
  messagingSenderId: "540338516843",
  appId: "1:540338516843:web:07c1cf7855f760f563522e",
  measurementId: "G-HYH71DJYBK",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
