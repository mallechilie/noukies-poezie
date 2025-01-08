import { createSlice } from "@reduxjs/toolkit";

const products: { [key: string]: number } = {};
function sumDict(dict: { [key: string]: number }) {
  return Object.values(dict).reduce((acc, value) => acc + value, 0);
}

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products,
    total: 200
  },
  reducers: {
    addProduct: (state, action) => {
      const id = action.payload;
      if (!state.products[id]) {
        state.products[id] = 1;
      } else {
        state.products[id]++;
      }
      state.total = sumDict(state.products);
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      if (!state.products[id]) {
      } else if (state.products[id] == 0) {
        delete state.products[id];
      } else {
        state.products[id]--;
      }
      state.total = sumDict(state.products);
    },
    removeProductFully: (state, action) => {
      const id = action.payload;
      if (!state.products[id]) {
      } else {
        delete state.products[id];
      }
      state.total = sumDict(state.products);
    }
  }
});

export const { addProduct, removeProduct, removeProductFully } = basketSlice.actions;

export default basketSlice.reducer;
