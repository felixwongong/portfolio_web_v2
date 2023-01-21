import { j as json } from "../../../../chunks/index2.js";
import { E as EmailLogin, S as SignOut } from "../../../../chunks/auth.js";
async function POST({ request }) {
  const reqJson = await request.json();
  console.log("Hit the route");
  const res = await EmailLogin(reqJson.email, reqJson.pw);
  return json(res);
}
async function DELETE({ request }) {
  const res = await SignOut();
  return json(res);
}
export {
  DELETE,
  POST
};
