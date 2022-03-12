
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC8peVwK6wFyMsxUBXJjwgzcFJ9-5d--k",
  authDomain: "fir-ce624.firebaseapp.com",
  projectId: "fir-ce624",
  storageBucket: "fir-ce624.appspot.com",
  messagingSenderId: "788936600731",
  appId: "1:788936600731:web:31a52a8290983d25282a3e"
};
console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    db
}