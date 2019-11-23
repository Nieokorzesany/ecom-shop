import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD9Jtu4b66_WP2xcfLs3vErPQgVXbrTSaE",
  authDomain: "swag-shop.firebaseapp.com",
  databaseURL: "https://swag-shop.firebaseio.com",
  projectId: "swag-shop",
  storageBucket: "swag-shop.appspot.com",
  messagingSenderId: "219668016610",
  appId: "1:219668016610:web:499d8e72fade8df25bddbb",
  measurementId: "G-FH4S9H8SXB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
