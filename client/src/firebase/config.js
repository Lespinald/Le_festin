import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDAOOxR6Lm1kY5-DOR1QGnaBH7Z0am8i8Q",
    authDomain: "react-bootcamp-30bca.firebaseapp.com",
    projectId: "react-bootcamp-30bca",
    storageBucket: "react-bootcamp-30bca.appspot.com",
    messagingSenderId: "984364954167",
    appId: "react-bootcamp-30bca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(app);
