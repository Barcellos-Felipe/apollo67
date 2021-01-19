import firebase from 'firebase';

let firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDgGWFKZLo6fFD-rBItOCDuoISYQK4X9jU",
  authDomain: "apollo-67.firebaseapp.com",
  databaseURL: "https://apollo-67-default-rtdb.firebaseio.com",
  projectId: "apollo-67",
  storageBucket: "apollo-67.appspot.com",
  messagingSenderId: "1086535505572",
  appId: "1:1086535505572:web:509138eb49bf96510ab831",
  measurementId: "G-9CFMFF2832"
});

firebase.analytics();

let db = firebaseApp.firestore();

export { db };