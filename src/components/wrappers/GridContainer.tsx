import * as React from "react";

import Grid from "@mui/material/Grid2";
import { SxProps, Theme } from "@mui/material";

export default function GridContainer(props: { sx?: SxProps<Theme>; children: React.ReactNode }) {
  return (
    <Grid container spacing={4} sx={props.sx}>
      {props.children}
    </Grid>
  );
}
