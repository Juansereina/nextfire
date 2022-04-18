import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtWbheYG0hDx8ubqmfzEgm5hqf88W9YWc",
  authDomain: "nextfire-b793f.firebaseapp.com",
  projectId: "nextfire-b793f",
  storageBucket: "nextfire-b793f.appspot.com",
  messagingSenderId: "19419594883",
  appId: "1:19419594883:web:a8aacaf0b7768796ff5bb6",
  measurementId: "G-M0XJ2M8R0V",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
