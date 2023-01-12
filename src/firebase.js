// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCN9_328zOnEKIDmqn_ftz1u-zJgTBQ8QQ",
//     authDomain: "facegram-react.firebaseapp.com",
//     projectId: "facegram-react",
//     storageBucket: "facegram-react.appspot.com",
//     messagingSenderId: "398405768670",
//     appId: "1:398405768670:web:11dbdf1b506e00f635f94f",
//     measurementId: "G-3Y0PHYB42S"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCN9_328zOnEKIDmqn_ftz1u-zJgTBQ8QQ",
    authDomain: "facegram-react.firebaseapp.com",
    projectId: "facegram-react",
    storageBucket: "facegram-react.appspot.com",
    messagingSenderId: "398405768670",
    appId: "1:398405768670:web:11dbdf1b506e00f635f94f",
    measurementId: "G-3Y0PHYB42S"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }