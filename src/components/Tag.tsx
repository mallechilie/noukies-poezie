import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

export default function Tag(props: { productType: string }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "fit-content",
        borderRadius: 1,
        backgroundColor: theme.palette.primary.light,
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
