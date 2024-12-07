import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtXEkiwF9Je_piZwINt3T-6k8j4E6a_do",
  authDomain: "react-user-auth-f43dc.firebaseapp.com",
  projectId: "react-user-auth-f43dc",
  storageBucket: "react-user-auth-f43dc.appspot.com",
  messagingSenderId: "705077321156",
  appId: "1:705077321156:web:1bb327563b66d398d75891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;