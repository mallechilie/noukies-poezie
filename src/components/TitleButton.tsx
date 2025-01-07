import * as React from "react";

import Link from "next/link";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Globals from "@/globals";

export default function TitleButton() {
  return (
    <Button
      component={Link}
      href="/"
      sx={{ color: Globals.theme.palette.primary.contrastText, display: "block" }}
    >
      <Typography variant="h6">NOUKS POËZIE</Typography>
    </Button>
  );
}
