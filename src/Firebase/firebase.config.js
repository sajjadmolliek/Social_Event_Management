// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyAhHz3M_tI1eOMwBSngAmOK1vJfr-XpFOs",
  authDomain: "social-event-management-8ae1a.firebaseapp.com",
  projectId: "social-event-management-8ae1a",
  storageBucket: "social-event-management-8ae1a.appspot.com",
  messagingSenderId: "490225076419",
  appId: "1:490225076419:web:490179f301939ba59a7a76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;
