import client from "@/database/connection/mongodbClient";

export async function getDbInfo() {
  const tested = { URI: false, database: false, collection: false };
  try {
    const mongoClient = await client.connect();
    await mongoClient.db(process.env.DB_NAME).command({ ping: 1 });
    tested.URI = true;

    const db = client.db(process.env.DB_NAME);
    const cols = await db.listCollections().toArray();
    tested.database = cols.length > 0;

    const items = await db
      .collection(process.env.COL_PRODUCTS ?? "")
      .find()
      .toArray();
    tested.collection = items.length > 0;
  } catch (e) {
    console.error(e);
  }

  console.log(tested);
  return tested;
}
