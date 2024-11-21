import client from "@/database/connection/mongodbClient";

export default async function getComponentByName(name: string) {
  try {
    const db = client.db(process.env.DB_NAME);
    const components = await db
      .collection(process.env.COL_COMPONENTS ?? "")
      .find({ name: name })
      .toArray();
    if (components.length > 1) {
      console.error(`Multiple components found with name ${name}: \n${components}`);
    }
    if (components.length < 1) {
      console.error(`No components found with name ${name}.`);
    }
    return JSON.parse(JSON.stringify(components[0]));
  } catch (e) {
    console.error(e);
    return [];
  }
}
