import { CircularProgress, Typography } from "@mui/material";
import getProducts from "@/database/api/getProducts";
import Product from "@/database/models/Product";
import GridContainer from "@/components/wrappers/GridContainer";
import GridItem from "@/components/wrappers/GridItem";
import ProductCard from "@/components/ProductCard";

export default async function ProductList() {
  const poezie: Product[] = await getProducts();
  console.log(poezie);
  if (poezie === undefined) {
    return <CircularProgress />;
  }
  if (poezie.length == 0) {
    return (
      <>
        <Typography>No products found</Typography>
      </>
    );
  }
  return (
    <GridContainer sx={{ my: 4 }}>
      {poezie.map((item) => (
        <GridItem key={item._id?.toString()}>
          <ProductCard product={item} />
        </GridItem>
      ))}
    </GridContainer>
  );
}
