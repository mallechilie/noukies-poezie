"use client";
import { IconButton } from "@mui/material";
import Product from "@/database/models/Product";
import Globals from "@/globals";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch } from "@/lib/hooks";
import { addProduct } from "@/lib/features/basket/basketSlice";

export default function AddProductButton(props: { product: Product }) {
  const dispatch = useAppDispatch();
  return (
    <IconButton
      sx={{
        color: Globals.theme.palette.primary.contrastText
      }}
      onClick={() => dispatch(addProduct(props.product._id))}
    >
      <ShoppingCartIcon />
    </IconButton>
  );
}
