import { Box, Typography } from "@mui/material";
import Globals from "@/globals";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";

export default function PriceTag(props: { price: number }) {
  return (
    <Box
      sx={{
        color: Globals.theme.palette.primary.contrastText,
        display: "flex",
        alignItems: "center"
      }}
    >
      <EuroSymbolIcon fontSize="small" />
      <Typography>{props.price}</Typography>
    </Box>
  );
}
