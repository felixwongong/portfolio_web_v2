import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import * as dotenv from "dotenv";
dotenv.config();
const { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } = process.env;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const workCollection = collection(db, "Work");
collection(db, "User");
const auth = getAuth();
async function EmailLogin(email, pw) {
  return await signInWithEmailAndPassword(auth, email, pw);
}
function LoggedIn() {
  return auth.currentUser != null;
}
async function SignOut() {
  return await signOut(auth);
}
export {
  EmailLogin as E,
  LoggedIn as L,
  SignOut as S,
  db as d,
  workCollection as w
};
