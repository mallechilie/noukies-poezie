import { CircularProgress } from "@mui/material";
import getPoezieTop10 from "@/database/api/getPoezieTop10";
import Poezie from "@/database/models/Poezie";
import GridContainer from "@/components/wrappers/GridContainer";
import GridItem from "@/components/wrappers/GridItem";
import ProductCard from "@/components/ProductCard";

export default async function PoezieList() {
  const poezie: Poezie[] = await getPoezieTop10();
  console.log(poezie);
  return !poezie ? (
    <CircularProgress />
  ) : (
    <GridContainer sx={{ my: 4 }}>
      {poezie.map((item) => (
        <GridItem key={item._id?.toString()}>
          <ProductCard product={item} />
        </GridItem>
      ))}
    </GridContainer>
  );
}
