import client from "@/database/connection/mongodbClient";
import { ObjectId } from "mongodb";

export default async function getProductById(poezieId: string) {
  try {
    const db = client.db(process.env.DB_NAME);
    const poezie = await db
      .collection(process.env.COL_POEZIE ?? "")
      .findOne({ _id: new ObjectId(poezieId) });
    console.log(poezie);
    return JSON.parse(JSON.stringify(poezie));
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
