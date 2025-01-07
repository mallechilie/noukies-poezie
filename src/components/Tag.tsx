import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Globals from "@/globals";

export default function Tag(props: { productType: string }) {
  return (
    <Box
      sx={{
        width: "fit-content",
        borderRadius: 1,
        backgroundColor: Globals.theme.palette.primary.light,
        m: "5px",
        py: "4px",
        px: "20px"
      }}
    >
      <Typography variant="body1" sx={{ color: "black" }}>
        {props.productType}
      </Typography>
    </Box>
  );
}
