import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getDocs, doc, db} from "./firestore.js";

const auth = getAuth();

export async function EmailLogin(email, pw) {
    return await signInWithEmailAndPassword(auth, email, pw);
}

export function LoggedIn() {
    return auth.currentUser != null;
}

export async function SignOut() {
    return await signOut(auth);
}

export async function IsAdmin() {
    const user = await getDocs(doc(db, "User", auth.currentUser.uid));
    if(user.empty) return false;
    user.forEach((u) => {
        console.log(u.get("role"));
    });
}