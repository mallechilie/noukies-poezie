import Link from "next/link";

import Globals from "@/globals";
import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import Typography, { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
import { Property } from "csstype";

export default function TextButton(props: {
  text: string;
  href: string;
  variant?: OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides>;
  textTransform?: Property.TextTransform;
  sx?: SxProps;
}) {
  return (
    <Button
      style={{ textTransform: props.textTransform }}
      component={Link}
      href={props.href}
      sx={{ ...props.sx, color: Globals.theme.palette.primary.contrastText, display: "block" }}
    >
      <Typography variant={props.variant}>{props.text}</Typography>
    </Button>
  );
}
