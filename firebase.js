// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYvkdQFFbZc1Lo17SfrlbtIpZ86fK7GTc",
    authDomain: "to-do-list-app-f7b29.firebaseapp.com",
    projectId: "to-do-list-app-f7b29",
    storageBucket: "to-do-list-app-f7b29.appspot.com",
    messagingSenderId: "454709943740",
    appId: "1:454709943740:web:3378dc33795ef3d95d1fb9",
    measurementId: "G-QH535DY17P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db  = getFirestore(app); 
export {db}