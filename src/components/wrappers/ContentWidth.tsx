import * as React from "react";

import type { SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";

export default function ContentWidth(props: { sx?: SxProps<Theme>; children: React.ReactNode }) {
  return (
    <Box sx={{ ...props.sx, width: 0.95, maxWidth: "1108px", margin: "auto" }}>
      {props.children}
    </Box>
  );
}
