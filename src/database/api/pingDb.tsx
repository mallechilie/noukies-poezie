import client from "@/database/connection/mongodbClient";

export async function pingDb() {
  let isConnected = false;
  try {
    const mongoClient = await client.connect();
    await mongoClient.db(process.env.DB_NAME).command({ ping: 1 });
    isConnected = true;
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return isConnected;
  } catch (e) {
    console.error(e);
    return isConnected;
  }
}
