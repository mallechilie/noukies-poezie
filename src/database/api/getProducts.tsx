import client from "@/database/connection/mongodbClient";
import Product from "../models/Product";

export default async function getProducts(amount = 10): Promise<Product[]> {
  try {
    const db = client.db(process.env.DB_NAME);
    const product = await db
      .collection(process.env.COL_PRODUCTS ?? "")
      .find({ type: "Product" })
      .limit(amount)
      .toArray();
    return JSON.parse(JSON.stringify(product));
  } catch (e) {
    console.error(e);
    return [];
  }
}
