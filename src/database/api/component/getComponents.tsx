import client from "@/database/connection/mongodbClient";

export default async function getComponents() {
  try {
    const db = client.db(process.env.DB_NAME);
    const components = await db
      .collection(process.env.COL_COMPONENTS ?? "")
      .find()
      .toArray();
    return JSON.parse(JSON.stringify(components));
  } catch (e) {
    console.error(e);
    return [];
  }
}
