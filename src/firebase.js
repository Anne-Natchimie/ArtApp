// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjk4733YJJpY-RxmYB5PwBUnWQTJvj_KU",
    authDomain: "artapp-f83db.firebaseapp.com",
    projectId: "artapp-f83db",
    storageBucket: "artapp-f83db.appspot.com",
    messagingSenderId: "1044344164886",
    appId: "1:1044344164886:web:620ebe4614970238315b37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestore = getFirestore(app); 

export default app; 