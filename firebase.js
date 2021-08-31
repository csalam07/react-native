import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRqhL6ipreMUMLYmQeJKko9yVWslXGivs",
  authDomain: "signal-clone-da75c.firebaseapp.com",
  projectId: "signal-clone-da75c",
  storageBucket: "signal-clone-da75c.appspot.com",
  messagingSenderId: "795654135481",
  appId: "1:795654135481:web:633a41fd57dc03e294c568",
  measurementId: "G-0ZLMSZE2NY",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
