import client from "@/database/connection/mongodbClient";

export default async function getPageByName(pageName: string) {
  try {
    const db = client.db(process.env.DB_NAME);
    const page = await db.collection(process.env.COL_PAGES ?? "").findOne({ titel: pageName });
    console.log(page);
    return JSON.parse(JSON.stringify(page));
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
