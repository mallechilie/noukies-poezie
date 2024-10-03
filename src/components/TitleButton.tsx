"use client";
import * as React from "react";

import Link from "next/link";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function TitleButton() {
  const theme = useTheme();
  return (
    <Button
      component={Link}
      href="/"
      sx={{ color: theme.palette.primary.contrastText, display: "block" }}
    >
      <Typography variant="h6">NOUKIES POËZIE</Typography>
    </Button>
  );
}
