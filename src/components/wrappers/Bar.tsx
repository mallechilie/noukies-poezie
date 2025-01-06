import * as React from "react";

import Globals from "@/globals";
import { Box, SxProps, Theme } from "@mui/material";

export default function Bar(props: { sx?: SxProps<Theme>; children: React.ReactNode }) {
  return (
    <Box
      sx={{
        ...props.sx,
        backgroundColor: Globals.theme.palette.primary.main,
        alignContent: "center",
        minHeight: 80
      }}
    >
      {props.children}
    </Box>
  );
}
