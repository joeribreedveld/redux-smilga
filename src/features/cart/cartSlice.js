import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

// Define a type for the slice state
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

// Create a Redux slice of state for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Export the actions generated from the slice
export const { clearCart } = cartSlice.actions;

// console.log(cartSlice);

// Export the reducer, either as a default or named export
export default cartSlice.reducer;
