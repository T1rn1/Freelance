// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlj6oHty9XPaZxjjX2gCj89JaNdZ-M9UE",
  authDomain: "freelance-7b7cc.firebaseapp.com",
  projectId: "freelance-7b7cc",
  storageBucket: "freelance-7b7cc.firebasestorage.app",
  messagingSenderId: "1067624753717",
  appId: "1:1067624753717:web:edd9d41363d9a5f51c9f7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
