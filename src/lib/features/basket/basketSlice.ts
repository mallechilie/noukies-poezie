import { createSlice } from "@reduxjs/toolkit";

const products: { [key: string]: number } = {};

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products
  },
  reducers: {
    addProduct: (state, action) => {
      const id = action.payload;
      if (!state.products[id]) {
        state.products[id] = 1;
      } else {
        state.products[id]++;
      }
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      if (!state.products[id]) {
        return;
      } else if (state.products[id] == 0) {
        delete state.products[id];
      } else {
        state.products[id]--;
      }
    },
    removeProductFully: (state, action) => {
      const id = action.payload;
      if (!state.products[id]) {
        return;
      } else {
        delete state.products[id];
      }
    }
  }
});

export const { addProduct, removeProduct, removeProductFully } = basketSlice.actions;

export default basketSlice.reducer;
