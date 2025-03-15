"use client";
import Product from "@/database/models/Product";
import Globals from "@/globals";
import { removeProduct } from "@/lib/features/basket/basketSlice";
import { useAppDispatch } from "@/lib/hooks";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

export default function RemoveButton(props: { product: Product }) {
  const dispatch = useAppDispatch();
  return (
    <IconButton
      sx={{
        color: Globals.theme.palette.primary.contrastText,
      }}
      onClick={() => dispatch(removeProduct(props.product))}
    >
      <RemoveIcon fontSize="small" />
    </IconButton>
  );
}
