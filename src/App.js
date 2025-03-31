import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({

  apiKey: "AIzaSyDM05UeRgEg9aukp2S3WIm6d2vZV8RNHlY",
  
  authDomain: "chat-wave-935ad.firebaseapp.com",
  
  projectId: "chat-wave-935ad",
  
  storageBucket: "chat-wave-935ad.firebasestorage.app",
  
  messagingSenderId: "551277440520",
  
  appId: "1:551277440520:web:3b655e9d8ea46944d56bbd",
  
  measurementId: "G-VVJG2BRBZ9"
  
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>⚛️🔥💬</h1>
      <SignOut />
        
      </header>
    </div>
  );
}

export default App;
