import ImageCarousel from "@/components/carousel/ImageCarousel";
import PriceTag from "@/components/PriceTag";
import ContentWidth from "@/components/wrappers/ContentWidth";
import GridContainer from "@/components/wrappers/GridContainer";
import getProductById from "@/database/api/product/getProductById";
import Product from "@/database/models/Product";
import { Box, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default async function Page({ params }: { params: { id: string } }) {
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
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <PriceTag price={product.prijs} />
            </Box>
          )}
        </Grid>
      </GridContainer>
    </ContentWidth>
  );
}
