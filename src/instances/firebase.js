import firebase from 'firebase/app'
import auth from 'firebase/auth';
import db from "firebase/database";
import storage from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6p2gUgs2NW2tUE-7nGYt-Pp_e3EuJuvg",
  authDomain: "shoreschool-b2fb5.firebaseapp.com",
  databaseURL: "https://shoreschool-b2fb5.firebaseio.com",
  projectId: "shoreschool-b2fb5",
  storageBucket: "shoreschool-b2fb5.appspot.com",
  messagingSenderId: "309773993550",
  appId: "1:309773993550:web:97408673398ff03070e51f"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
