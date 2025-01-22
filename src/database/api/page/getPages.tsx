import client from "@/database/connection/mongodbClient";

export default async function getPages(amount = 10) {
  try {
    const db = client.db(process.env.DB_NAME);
    const pages = await db
      .collection(process.env.COL_PAGES ?? "")
      .find({})
      .limit(amount)
      .toArray();
    return JSON.parse(JSON.stringify(pages));
  } catch (e) {
    console.error(e);
    return [];
  }
}
