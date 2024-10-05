import { CircularProgress, Typography } from "@mui/material";
import getPoezieTop10 from "@/database/api/getPoezieTop10";
import Poezie from "@/database/models/Poezie";

export default async function PoezieList() {
  const poezie: Poezie[] = await getPoezieTop10();
  console.log(poezie);
  return !poezie ? (
    <CircularProgress />
  ) : (
    <ul>
      {poezie.map((item, i) => (
        <Typography key={item.id?.toString() ?? i.toString()}>{item.titel}</Typography>
      ))}
    </ul>
  );
}
