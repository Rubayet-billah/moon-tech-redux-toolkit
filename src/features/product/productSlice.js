import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data, getProducts } from "./productsAPI";

const initialState = {
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return getProducts();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
