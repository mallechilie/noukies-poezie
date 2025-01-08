"use client";
import * as React from "react";

import Typography from "@mui/material/Typography";
import Globals from "@/globals";
import { Paper, SxProps } from "@mui/material";
import { useAppSelector } from "@/lib/hooks";

export default function Counter(props: { sx?: SxProps; product?: string }) {
  const basket = useAppSelector((state) => state.basket);

  const count = props.product ? basket.products[props.product] : basket.total;
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
          ...props.sx
        }}
        elevation={3}
      >
        <Typography variant="body1" >
          {count}
        </Typography>
      </Paper>
    )
  );
}
