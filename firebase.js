// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn4h9mqf2QgZpxCL6UOJmoyAw_ebwfOMk",
  authDomain: "laundry-app-68363.firebaseapp.com",
  projectId: "laundry-app-68363",
  storageBucket: "laundry-app-68363.appspot.com",
  messagingSenderId: "137835741997",
  appId: "1:137835741997:web:0e96ba396ead7e1f7189a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};


