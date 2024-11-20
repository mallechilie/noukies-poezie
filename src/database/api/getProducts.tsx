import client from "@/database/connection/mongodbClient";

export default async function getProducts(amount = 10) {
  try {
    const db = client.db(process.env.DB_NAME);
    const poezie = await db
      .collection(process.env.COL_PRODUCTS ?? "")
      .find({ type: "Product" })
      .limit(amount)
      .toArray();
    return JSON.parse(JSON.stringify(poezie));
  } catch (e) {
    console.error(e);
    return [];
  }
}
