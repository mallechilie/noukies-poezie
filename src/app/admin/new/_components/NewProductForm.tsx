import VerzendType from "@/database/models/ProductType";
import Globals from "@/globals";
import { updateProduct } from "@/lib/features/newProduct/newProductSlice";
import { useAppSelector } from "@/lib/hooks";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import PriceInput from "./form/PriceInput";

export default function NewProductForm(props: { productTypes: VerzendType[] }) {
  const dispatch = useDispatch();
  const { product } = useAppSelector((state) => state.newProduct);
  console.log(props.productTypes);

  return (
    <>
      <TextField
        id="title"
        label="Titel"
        variant="standard"
        sx={{
          ...Globals.theme.typography.h2,
          "& .MuiInputBase-root": {
            ...Globals.theme.typography.h2,
          },
        }}
        value={product.titel}
        onChange={(e) => dispatch(updateProduct({ titel: e.target.value }))}
      />
      <TextField
        id="omschrijving"
        label="Omschrijving"
        multiline
        rows={6}
        variant="standard"
        value={product.omschrijving}
        onChange={(e) => dispatch(updateProduct({ omschrijving: e.target.value }))}
      />
      <PriceInput
        value={product.prijs.toString()}
        onChange={(e) => dispatch(updateProduct({ prijs: parseFloat(e.target.value) }))}
      />
      {/* <ProductTypeInput productTypes={props.productTypes} /> */}
    </>
  );
}
