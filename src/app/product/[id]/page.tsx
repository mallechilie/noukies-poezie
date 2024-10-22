import ContentWidth from "@/components/wrappers/ContentWidth";
import getProductById from "@/database/api/getProductById";
import Poezie from "@/database/models/Poezie";
import { Box, CircularProgress, Typography } from "@mui/material";

export default async function Page({ params }: { params: { id: string } }) {
  const product: Poezie | undefined = await getProductById(params.id);
  console.log(product);
  return (
    <ContentWidth>
      {!product ? (
        <CircularProgress sx={{ m: 3 }} />
      ) : (
        <Box>
          <Box
            sx={{
              borderRadius: 1,
              aspectRatio: 800 / 640,
              width: "100%",
              maxWidth: "600px",
              backgroundImage: `url(https://picsum.photos/800/640)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end"
            }}
          />
          <Typography variant="h1">{product.titel}</Typography>
          <Typography variant="body1">{product.omschrijving}</Typography>
        </Box>
      )}
    </ContentWidth>
  );
}
