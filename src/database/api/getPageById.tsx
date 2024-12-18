import client from "@/database/connection/mongodbClient";
import { ObjectId } from "mongodb";

export default async function getPageById(pageId: string) {
  try {
    const db = client.db(process.env.DB_NAME);
    const page = await db
      .collection(process.env.COL_PAGES ?? "")
      .findOne({ _id: new ObjectId(pageId) });
    return JSON.parse(JSON.stringify(page));
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
