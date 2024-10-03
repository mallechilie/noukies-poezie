import * as React from "react";

import Grid from "@mui/material/Grid2";
import { SxProps, Theme } from "@mui/material";

export default function GridItem(props: { children: React.ReactNode; sx?: SxProps<Theme> }) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={props.sx}>
      {props.children}
    </Grid>
  );
}
