import firebase from 'firebase/app';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAwYTOlk_Dj3byWqcvmwtgbfPfrJgDh87k",
    authDomain: "whatsapp-clone-brownsurfing.firebaseapp.com",
    projectId: "whatsapp-clone-brownsurfing",
    storageBucket: "whatsapp-clone-brownsurfing.appspot.com",
    messagingSenderId: "378505011602",
    appId: "1:378505011602:web:8e6545ada7de8c9a3d214b"
};

// const app = !getApps().length
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };