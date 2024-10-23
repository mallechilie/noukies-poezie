import { pingDb } from "@/database/api/pingDb";
import { Typography } from "@mui/material";

export default async function Ping() {
  const isConnected = await pingDb();
  return isConnected ? <Typography>Connected!</Typography> : <Typography>Testing...</Typography>;
}
