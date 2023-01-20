import {json} from '@sveltejs/kit';

import {getDocs, workCollection} from "$lib/firebase.js";


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
