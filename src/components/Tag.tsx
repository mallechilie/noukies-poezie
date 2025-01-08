import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Globals from "@/globals";
import { SxProps } from "@mui/material";

export default function Tag(props: { sx?: SxProps; tag: string }) {
  return (
    <Box
      sx={{
        ...props.sx,
        width: "fit-content",
        height: "fit-content",
        borderRadius: 1,
        backgroundColor: Globals.theme.palette.primary.light,
        m: "5px",
        py: "4px",
        px: "20px"
      }}
    >
      <Typography variant="body1" sx={{ color: "black" }}>
        {props.tag}
      </Typography>
    </Box>
  );
}
