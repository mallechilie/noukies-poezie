import ProductCard from "@/components/ProductCard";
import GridContainer from "@/components/wrappers/GridContainer";
import GridItem from "@/components/wrappers/GridItem";
import getProducts from "@/database/api/product/getProducts";
import { CircularProgress, Typography } from "@mui/material";

export default async function ProductList() {
  const products = await getProducts();
  if (products === undefined) {
    return <CircularProgress />;
  }
  if (products.length == 0) {
    return <Typography>No products found</Typography>;
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
