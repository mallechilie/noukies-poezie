import { CircularProgress, Typography } from "@mui/material";
import getProducts from "@/database/api/getProducts";
import GridContainer from "@/components/wrappers/GridContainer";
import GridItem from "@/components/wrappers/GridItem";
import ProductCard from "@/components/ProductCard";

export default async function ProductList() {
  const products = await getProducts();
  if (products === undefined) {
    return <CircularProgress />;
  }
  if (products.length == 0) {
    return (
      <>
        <Typography>No products found</Typography>
      </>
    );
  }
  return (
    <GridContainer sx={{ my: 4 }}>
      {products.map((item) => (
        <GridItem key={item._id?.toString()}>
          <ProductCard product={item} />
        </GridItem>
      ))}
    </GridContainer>
  );
}
