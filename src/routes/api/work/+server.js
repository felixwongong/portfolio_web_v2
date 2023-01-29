import {error, json} from '@sveltejs/kit';

import {getDocs, setDoc, doc, db, workCollection} from "$lib/google/firestore";
import {LoggedIn} from "$lib/google/auth.js";

/* eslint-disable */
export async function GET() {
    let works = [];

    const querySnapshot = await getDocs(workCollection);
    querySnapshot.forEach((doc) => {
        const work = doc.data();
        work.id = doc.id;

        works.push(work);
    });

    return json(works);
}

//This is only for admin
/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    if(!LoggedIn()) throw error(401, {message: "Unauthorized"});
    const reqJson = await request.json();
    const newWork = {
        ...reqJson
    }
    const res = await setDoc(doc(db, "Work", reqJson.slug), newWork);

    return json(reqJson);
}

/* eslint-enable */