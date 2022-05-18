// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU5NncYgUA-_ljh0xxfkDYzn0esCqqDF8",
  authDomain: "todo-4203c.firebaseapp.com",
  projectId: "todo-4203c",
  storageBucket: "todo-4203c.appspot.com",
  messagingSenderId: "446066535309",
  appId: "1:446066535309:web:71dc06449930502d6debc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth ;