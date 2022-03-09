// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: serverRuntimeConfig.api_key,
  authDomain: "facebook-b24ea.firebaseapp.com",
  projectId: "facebook-b24ea",
  storageBucket: "facebook-b24ea.appspot.com",
  messagingSenderId: "572881464700",
  appId: "1:572881464700:web:9584a0fcc304f78951c8f9",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
