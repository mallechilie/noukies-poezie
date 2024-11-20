import ContentWidth from "@/components/wrappers/ContentWidth";
import GridContainer from "@/components/wrappers/GridContainer";
import getProductById from "@/database/api/getProductById";
import Product from "@/database/models/Product";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";

export default async function Page({ params }: { params: { id: string } }) {
  const product: Product | undefined = await getProductById(params.id);
  console.log(product);
  return (
    <ContentWidth>
      {!product ? (
        <CircularProgress sx={{ m: 3 }} />
      ) : (
        <GridContainer>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                borderRadius: 1,
                aspectRatio: 800 / 640,
                width: "100%",
                backgroundImage: `url(${product.link})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "flex-end"
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h2">{product.titel}</Typography>
            <Typography variant="body1">{product.omschrijving}</Typography>
            {!product.prijs ? (
              <></>
            ) : (
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button sx={{ color: "black", textTransform: "none", display: "flex" }}>
                  <EuroSymbolIcon fontSize="small" />
                  <Typography>{product.prijs}</Typography>
                </Button>
              </Box>
            )}
          </Grid>
        </GridContainer>
      )}
    </ContentWidth>
  );
}
