import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDhOWQTud6y85-a19YnblP17hleAbEzU9c",
  authDomain: "crown-db-d013e.firebaseapp.com",
  projectId: "crown-db-d013e",
  storageBucket: "crown-db-d013e.appspot.com",
  messagingSenderId: "708824828020",
  appId: "1:708824828020:web:ff95002ef5616999256921",
  measurementId: "G-80TEPGH6TV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
