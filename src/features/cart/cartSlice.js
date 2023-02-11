import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      let selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );

      if (!selectedProduct) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        selectedProduct.quantity += 1;
        state.cart
          .filter((product) => product._id !== action.payload._id)
          .push(selectedProduct);
      }
    },
  },
});

export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;
