// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDvVYNJS81RkxruoNNX3-ERSOv3MSaEKw",
  authDomain: "anama-5ba78.firebaseapp.com",
  projectId: "anama-5ba78",
  storageBucket: "anama-5ba78.firebasestorage.app",
  messagingSenderId: "641533046699",
  appId: "1:641533046699:web:ac5bbec658bc08395eacee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔥 garante persistência global
await setPersistence(auth, browserLocalPersistence);

export { auth, db, onAuthStateChanged };