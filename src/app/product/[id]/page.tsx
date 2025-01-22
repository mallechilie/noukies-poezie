import AddToBasketButton from "@/components/basket/AddToBasketButton";
import Counter from "@/components/basket/Counter";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import PriceTag from "@/components/PriceTag";
import ContentWidth from "@/components/wrappers/ContentWidth";
import GridContainer from "@/components/wrappers/GridContainer";
import getProductById from "@/database/api/product/getProductById";
import Product from "@/database/models/Product";
import { Box, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product: Product | undefined = await getProductById(id);
  if (!product)
    return (
      <ContentWidth>
        <CircularProgress sx={{ m: 3 }} />
      </ContentWidth>
    );

  return (
    <ContentWidth>
      <GridContainer sx={{ mt: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ImageCarousel product={product} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2">{product.titel}</Typography>
          <Typography variant="body1">{product.omschrijving}</Typography>
          {product.prijs && (
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <PriceTag price={product.prijs} />
              <AddToBasketButton product={product} />
              <Box>
                <Counter product={product} />
              </Box>
            </Box>
          )}
        </Grid>
      </GridContainer>
    </ContentWidth>
  );
}
