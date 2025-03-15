import client from "@/database/connection/mongodbClient";
import { ObjectId } from "mongodb";

export default async function getProductById(productTypeId: string) {
  try {
    const db = client.db(process.env.DB_NAME);
    const productType = await db
      .collection(process.env.COL_PRODUCTS ?? "")
      .findOne({ _id: new ObjectId(productTypeId) });
    return JSON.parse(JSON.stringify(productType));
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
