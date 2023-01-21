import { j as json, e as error } from "../../../chunks/index.js";
import { w as workCollection, L as LoggedIn, d as db } from "../../../chunks/auth.js";
import { getDocs, setDoc, doc } from "firebase/firestore";
async function GET() {
  let works = [];
  const querySnapshot = await getDocs(workCollection);
  querySnapshot.forEach((doc2) => {
    const work = doc2.data();
    work.id = doc2.id;
    works.push(work);
  });
  return json(works);
}
async function POST({ request }) {
  if (!LoggedIn())
    throw error(401, { message: "Unauthorized" });
  const reqJson = await request.json();
  const newWork = {
    ...reqJson
  };
  await setDoc(doc(db, "Work", reqJson.slug), newWork);
  return json(reqJson);
}
export {
  GET,
  POST
};
