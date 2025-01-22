import Product from "@/database/models/Product";
import { createSlice } from "@reduxjs/toolkit";

export interface IBasketState {
  products: { product: Product; count: number }[];
  total: number;
}

const initialState: IBasketState = {
  products: [],
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      if (!state.products.find((obj) => obj.product._id == product._id)) {
        state.products.push({ product, count: 1 });
      } else {
        const index = state.products.map((e) => e.product._id).indexOf(product._id);
        const count = state.products[index].count;
        state.products[index] = { product, count: count + 1 };
      }
      state.total = state.products.reduce((sum, item) => sum + item.count, 0);
    },

    removeProduct: (state, action) => {
      const product = action.payload;
      if (!state.products.find((obj) => obj.product._id == product._id)) {
        throw new Error(`Product not found in state: ${product.titel}`);
      }
      const index = state.products.map((e) => e.product._id).indexOf(product._id);
      const count = state.products[index].count;
      if (count <= 1) {
        state.products.splice(index, 1);
      } else {
        state.products[index] = { product, count: count - 1 };
      }
      state.total = state.products.reduce((sum, item) => sum + item.count, 0);
    },

    deleteProduct: (state, action) => {
      const product = action.payload;
      if (!state.products.find((obj) => obj.product._id == product._id)) {
        throw new Error(`Product not found in state: ${product.titel}`);
      } else {
        const index = state.products.map((e) => e.product._id).indexOf(product._id);
        state.products.splice(index, 1);
      }
      state.total = state.products.reduce((sum, item) => sum + item.count, 0);
    },
  },
});

export const { addProduct, removeProduct, deleteProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
