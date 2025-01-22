"use client";
import Product from "@/database/models/Product";
import Globals from "@/globals";
import { addProduct } from "@/lib/features/basket/basketSlice";
import { useAppDispatch } from "@/lib/hooks";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

export default function AddButton(props: { product: Product }) {
  const dispatch = useAppDispatch();
  return (
    <IconButton
      sx={{
        color: Globals.theme.palette.primary.contrastText,
      }}
      onClick={() => dispatch(addProduct(props.product))}
    >
      <AddIcon fontSize="small" />
    </IconButton>
  );
}
