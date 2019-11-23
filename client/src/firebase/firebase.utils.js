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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
