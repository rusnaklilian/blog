import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr0ED9iSYI9Z9mE2qM0Qlg3d8YeL48TwQ",
  authDomain: "blogproject-c9de8.firebaseapp.com",
  projectId: "blogproject-c9de8",
  storageBucket: "blogproject-c9de8.appspot.com",
  messagingSenderId: "570802441110",
  appId: "1:570802441110:web:8437896cee77c442f96bb7"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
