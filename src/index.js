import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";
//import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKsPRn2QUQ5t1xY-kdN1gs9XO9wvsntTw",
  authDomain: "pruebaexamen-1fe49.firebaseapp.com",
  projectId: "pruebaexamen-1fe49",
  storageBucket: "pruebaexamen-1fe49.appspot.com",
  messagingSenderId: "464952435520",
  appId: "1:464952435520:web:56d9ad19f775533366d0a5"
};
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);