import Globals from "@/globals";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import { Box, SxProps, Typography, TypographyPropsVariantOverrides } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";

export default function PriceTag(props: {
  price: number;
  variant?: OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides>;
  sx?: SxProps;
}) {
  return (
    <Box
      sx={{
        ...props.sx,
        color: Globals.theme.palette.primary.contrastText,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <EuroSymbolIcon fontSize="small" />
      <Typography variant={props.variant}>
        {(Math.round(props.price * 100) / 100).toFixed(2)}
      </Typography>
    </Box>
  );
}
