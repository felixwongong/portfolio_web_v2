import {json} from '@sveltejs/kit';

import {EmailLogin, SignOut} from "$lib/google/auth.js";


//This is only for admin
/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    const reqJson = await request.json();
    console.log("Hit the route");
    const res = await EmailLogin(reqJson.email, reqJson.pw);

    return json(res);
}

export async function DELETE({request}) {
    const res = await SignOut();

    return json(res);
}
/* eslint-enable */
