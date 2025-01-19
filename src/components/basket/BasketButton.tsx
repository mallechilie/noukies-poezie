import Link from "next/link";

import Counter from "@/components/basket/Counter";
import Globals from "@/globals";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, IconButton } from "@mui/material";

export default function BasketButton() {
  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        component={Link}
        href="/winkelmandje"
        sx={{
          color: Globals.theme.palette.primary.contrastText,
        }}
      >
        <ShoppingCartIcon />
      </IconButton>
      <Counter
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          m: 0,
          p: 0,
          backgroundColor: Globals.theme.palette.secondary.main,
          color: Globals.theme.palette.secondary.contrastText,
        }}
      />
    </Box>
  );
}
