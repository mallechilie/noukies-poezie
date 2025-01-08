import client from "@/database/connection/mongodbClient";
import { ObjectId } from "mongodb";

export default async function getComponentById(id: string) {
  try {
    const db = client.db(process.env.DB_NAME);
    const components = await db
      .collection(process.env.COL_COMPONENTS ?? "")
      .findOne({ _id: new ObjectId(id) });
    return JSON.parse(JSON.stringify(components));
  } catch (e) {
    console.error(e);
    return [];
  }
}
