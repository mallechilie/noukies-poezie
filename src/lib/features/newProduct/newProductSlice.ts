import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    titel: "",
    omschrijving: "",
    afbeeldingen: [],
    categorie: "",
    productType: "",
    prijs: 0,
  },
};

export const newProductSlice = createSlice({
  name: "newProduct",
  initialState: initialState,
  reducers: {
    updateProduct: (state, action) => {
      state.product = {...state.product, ...action.payload};
    },
  },
});

export const { updateProduct } = newProductSlice.actions;
export const newProductReducer = newProductSlice.reducer;
