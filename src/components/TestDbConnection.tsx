import { testDatabaseConnection } from "@/database/actions";
import { Typography } from "@mui/material";

export default async function TestDbConnection() {
  const isConnected = await testDatabaseConnection();
  return isConnected ? <Typography>Connected!</Typography> : <Typography>Testing...</Typography>;
}
