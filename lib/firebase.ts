import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCty1G6Gq0DtUagDeUybuqQol3zHVGXSdY",
  authDomain: "nextfire-38f98.firebaseapp.com",
  projectId: "nextfire-38f98",
  storageBucket: "nextfire-38f98.appspot.com",
  messagingSenderId: "885618567014",
  appId: "1:885618567014:web:a0b026216c797542354aa7",
  measurementId: "G-8YSTM4L5FY",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
