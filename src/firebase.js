import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdN_YM_oh-teCaJPd0-FK_K70Y1nbn2AQ",

  authDomain: "clone-a4c40.firebaseapp.com",

  projectId: "clone-a4c40",

  storageBucket: "clone-a4c40.appspot.com",

  messagingSenderId: "413112906294",

  appId: "1:413112906294:web:cb29448e2306b6d1655e97",

  measurementId: "G-V6R6NJ9MZR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
