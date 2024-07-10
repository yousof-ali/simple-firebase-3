// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpGWjmQzAUUG2vj8wdyRkGl5JnqG1ufcQ",
  authDomain: "fir-3-a0e6e.firebaseapp.com",
  projectId: "fir-3-a0e6e",
  storageBucket: "fir-3-a0e6e.appspot.com",
  messagingSenderId: "846828884430",
  appId: "1:846828884430:web:aa6c053cfe0f1c18c65b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;