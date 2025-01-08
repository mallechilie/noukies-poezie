import { Box, Button, Card, CardContent, Link, Typography } from "@mui/material";
import Product from "@/database/models/Product";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import Tag from "@/components/Tag";
import Globals from "@/globals";
import Counter from "@/components/basket/Counter";

export default function ProductCard(props: { product: Product }) {
  return (
    <Card sx={{ backgroundColor: Globals.theme.palette.secondary.main }}>
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <Box
          component={Link}
          href={`/product/${props.product._id}`}
          sx={{
            aspectRatio: 350 / 240,
            width: 1,
            backgroundImage: `url(${props.product.afbeeldingen[0]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "block",
            position: "relative"
          }}
        >
          <Counter product={props.product._id?.toString() ?? ""} sx={{ position: "absolute", right: 0 }} />
          {props.product.productType && (
            <Tag tag={props.product.productType} sx={{ position: "absolute", bottom: 0 }} />
          )}
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
                textTransform: "none"
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
              textTransform: "none"
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
