import { Box, Button, Card, CardContent, Link, Typography } from "@mui/material";
import Product from "@/database/models/Product";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import Tag from "@/components/Tag";
import Globals from "@/globals";

export default function ProductCard(props: { product: Product }) {
  return (
    <Card sx={{ backgroundColor: Globals.theme.palette.secondary.main }}>
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <Box
          component={Link}
          href={`/product/${props.product._id}`}
          sx={{
            borderRadius: 1,
            aspectRatio: 350 / 240,
            width: "100%",
            backgroundImage: `url(${props.product.afbeeldingen[0].link})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "flex-end"
          }}
        >
          {props.product.productType ? <Tag productType={props.product.productType} /> : <></>}
        </Box>

        <Typography variant="h5" component="div">
          {props.product.titel}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3
          }}
        >
          {props.product.omschrijving}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {props.product.prijs ? (
            <Button
              sx={{
                color: Globals.theme.palette.secondary.contrastText,
                textTransform: "none",
                display: "flex"
              }}
            >
              <EuroSymbolIcon fontSize="small" />
              <Typography>{props.product.prijs}</Typography>
            </Button>
          ) : (
            <Box></Box>
          )}
          <Button
            sx={{
              color: Globals.theme.palette.secondary.contrastText,
              textTransform: "none",
              display: "flex"
            }}
            component={Link}
            href={`/product/${props.product._id}`}
          >
            <Typography variant="body2">Lees meer</Typography>
            <ArrowForwardIcon fontSize="small" />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
