import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addTocart } = cartSlice.actions;

export default cartSlice.reducer;
