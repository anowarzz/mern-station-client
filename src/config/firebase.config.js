// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4HO8nhvVV_FzOUtcoXmqRZKNnMNEZjZk",
  authDomain: "mern-station.firebaseapp.com",
  projectId: "mern-station",
  storageBucket: "mern-station.appspot.com",
  messagingSenderId: "23285898071",
  appId: "1:23285898071:web:f636e450aa56dde6537c12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;