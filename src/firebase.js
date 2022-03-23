import '@firebase/firestore'
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDv7I-9kt1I-ElN8ida_u-OpN2XFSEFSJs",
    authDomain: "parkinsonjorgelina.firebaseapp.com",
    projectId: "parkinsonjorgelina",
    storageBucket: "parkinsonjorgelina.appspot.com",
    messagingSenderId: "173113673507",
    appId: "1:173113673507:web:16d784ec4a774c131aee96",
    measurementId: "G-SSKC2ZYYXK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();

export {db, storage}