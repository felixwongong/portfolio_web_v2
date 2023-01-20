// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYl3e8mgK-Yz4B4je44y0M-noyeUv8y4I",
    authDomain: "cofydev-41e1e.firebaseapp.com",
    projectId: "cofydev-41e1e",
    storageBucket: "cofydev-41e1e.appspot.com",
    messagingSenderId: "968658513934",
    appId: "1:968658513934:web:8019861b8e43767786cc5f",
    measurementId: "G-Q1M4N0CZY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const workCollection = collection(db, "Work");

// const querySnapshot = await getDocs(collection(db, "Work"));
// querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
// });

export {db, getDocs, workCollection};