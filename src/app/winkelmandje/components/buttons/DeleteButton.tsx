"use client";
import Product from "@/database/models/Product";
import Globals from "@/globals";
import { deleteProduct } from "@/lib/features/basket/basketSlice";
import { useAppDispatch } from "@/lib/hooks";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export default function DeleteButton(props: { product: Product }) {
  const dispatch = useAppDispatch();
  return (
    <IconButton
      sx={{
        color: Globals.theme.palette.primary.contrastText,
      }}
      onClick={() => dispatch(deleteProduct(props.product))}
    >
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
}
