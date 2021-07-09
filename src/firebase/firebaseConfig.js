
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDuWFCeUCWw4qyUkwsSLQYi_t_85qbxjXA",
    authDomain: "react-app-curso-65d2d.firebaseapp.com",
    projectId: "react-app-curso-65d2d",
    storageBucket: "react-app-curso-65d2d.appspot.com",
    messagingSenderId: "778544575436",
    appId: "1:778544575436:web:a51dbe28cdce61518ea369"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}