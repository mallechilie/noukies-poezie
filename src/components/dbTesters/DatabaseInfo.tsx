import { getDbInfo } from "@/database/api/getDbInfo";
import { Typography } from "@mui/material";

export default async function DatabaseInfo() {
  const info = await getDbInfo();

  return (
    <Typography>
      URI: {info.URI}
      database: {info.database}
      collection: {info.collection}
    </Typography>
  );
}
