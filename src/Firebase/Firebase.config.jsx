// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBkkejU6bx8wG9ulof0pSwTIVwd6jkjHk",
  authDomain: "bd-doctor-client.firebaseapp.com",
  projectId: "bd-doctor-client",
  storageBucket: "bd-doctor-client.appspot.com",
  messagingSenderId: "110896323996",
  appId: "1:110896323996:web:274c933ec8df6e0f49bc59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;