import client from "@/database/connection/mongodbClient";
import { ObjectId } from "mongodb";

export default async function getProductById(productId: string) {
  try {
    const db = client.db(process.env.DB_NAME);
    const product = await db
      .collection(process.env.COL_PRODUCTS ?? "")
      .findOne({ _id: new ObjectId(productId) });
    console.log(product);
    return JSON.parse(JSON.stringify(product));
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
