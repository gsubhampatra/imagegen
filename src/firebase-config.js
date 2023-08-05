// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVGze4_FChld6nd80MSmgfml8kLwZL_uA",
  authDomain: "imagegenbyg.firebaseapp.com",
  projectId:  "imagegenbyg",
  storageBucket: "imagegenbyg.appspot.com",
  messagingSenderId: "829203892015",
  appId: "1:829203892015:web:58ea2ee17c050232db83da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const Provider = new GoogleAuthProvider();
const db = getFirestore(app)
const storage = getStorage(app)

export {Auth,Provider,db,storage};