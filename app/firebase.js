// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM2r51kX5FaW_0AXReT3vNxLcCjtPrPqE",
  authDomain: "my-website-d7dcc.firebaseapp.com",
  projectId: "my-website-d7dcc",
  storageBucket: "my-website-d7dcc.firebasestorage.app",
  messagingSenderId: "783853674665",
  appId: "1:783853674665:web:301c9e01b68c34b19049b8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
export default firebaseApp;
