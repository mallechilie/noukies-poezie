"use client";
import { Box, Button, Card, CardContent, Link, Typography, useTheme } from "@mui/material";
import Poezie from "@/database/models/Poezie";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ProductCard(props: { product: Poezie }) {
  const theme = useTheme();
  return (
    <Card sx={{ backgroundColor: theme.palette.secondary.main }}>
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <Box
          component={Link}
          href={`/product/${props.product._id}`}
          sx={{
            borderRadius: 1,
            aspectRatio: 350 / 240,
            width: "100%",
            backgroundImage: `url(https://picsum.photos/350/240)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "flex-end"
          }}
        />

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

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{
              color: theme.palette.secondary.contrastText,
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
