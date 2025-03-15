import client from "@/database/connection/mongodbClient";
import VerzendType from "@/database/models/ProductType";

export default async function getProductTypes(amount = 10): Promise<VerzendType[]> {
  try {
    const db = client.db(process.env.DB_NAME);
    const productType = await db
      .collection(process.env.COL_PRODUCTS ?? "")
      .find({ type: "ProductType" })
      .limit(amount)
      .toArray();
    return JSON.parse(JSON.stringify(productType));
  } catch (e) {
    console.error(e);
    return [];
  }
}
