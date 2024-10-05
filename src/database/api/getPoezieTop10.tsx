import client from "@/database/connection/mongodb";


export default async function getPoezieTop10() {
  try {
    const db = client.db(process.env.DB_NAME);
    const poezie = await db
      .collection(process.env.COL_POEZIE ?? "")
      .find({})
      .limit(10)
      .toArray();
    return JSON.parse(JSON.stringify(poezie));
  } catch (e) {
    console.error(e);
    return [];
  }
}