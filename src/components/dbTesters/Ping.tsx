import { pingDb } from "@/database/api/pingDb";
import { Typography } from "@mui/material";

export default async function Ping() {
  const isConnected = await pingDb();
  if (isConnected) {
    console.log("ping: connected");
    return <></>;
  } else {
    console.log("Ping: no response");
    return <Typography>No database connection</Typography>;
  }
}
