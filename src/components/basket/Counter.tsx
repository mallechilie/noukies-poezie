"use client";

import Product from "@/database/models/Product";
import Globals from "@/globals";
import { useAppSelector } from "@/lib/hooks";
import { Paper, SxProps } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Counter(props: { sx?: SxProps; product?: Product }) {
  const basket = useAppSelector((state) => state.basket);

  const count = props.product?._id
    ? basket.products.find((item) => item.product._id == props.product?._id)?.count
    : basket.total;
  console.log("basket:", basket);

  return (
    !!count && (
      <Paper
        sx={{
          minWidth: "1em",
          width: "fit-content",
          height: "fit-content",
          borderRadius: "50%",
          backgroundColor: Globals.theme.palette.primary.main,
          m: "5px",
          p: "4px",
          display: "flex",
          justifyContent: "center",
          ...props.sx,
        }}
        elevation={3}
      >
        <Typography variant="body1">{count}</Typography>
      </Paper>
    )
  );
}
