import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwYTOlk_Dj3byWqcvmwtgbfPfrJgDh87k",
    authDomain: "whatsapp-clone-brownsurfing.firebaseapp.com",
    projectId: "whatsapp-clone-brownsurfing",
    storageBucket: "whatsapp-clone-brownsurfing.appspot.com",
    messagingSenderId: "378505011602",
    appId: "1:378505011602:web:8e6545ada7de8c9a3d214b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;