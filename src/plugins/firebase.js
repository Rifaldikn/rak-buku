// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// import firebase from 'firebase';

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBKKGINn-wJmQh8alNPg2ZjV99YLHt0JEQ",
  authDomain: "rakbuku-d19da.firebaseapp.com",
  databaseURL: "https://rakbuku-d19da.firebaseio.com",
  projectId: "rakbuku-d19da",
  storageBucket: "rakbuku-d19da.appspot.com",
  messagingSenderId: "139010760637",
  appId: "1:139010760637:web:dcc10f4639d951bf"
};

firebase.initializeApp(firebaseConfig);