"use client";
import * as React from "react";

import Typography from "@mui/material/Typography";
import Globals from "@/globals";
import { Paper, SxProps } from "@mui/material";
import { useAppSelector } from "@/lib/hooks";

export default function Counter(props: { sx?: SxProps; product: string }) {
  const basket = useAppSelector((state) => state.basket);
  console.log("basket:", basket.products);

  return (
    basket.products[props.product] && (
      <Paper
        sx={{
          ...props.sx,
          minWidth: "1em",
          width: "fit-content",
          height: "fit-content",
          borderRadius: "50%",
          backgroundColor: Globals.theme.palette.primary.main,
          m: "5px",
          p: "4px",
          display: "flex",
          justifyContent: "center"
        }}
        elevation={3}
      >
        <Typography variant="body1" sx={{ color: "black" }}>
          {basket.products[props.product]}
        </Typography>
      </Paper>
    )
  );
}
