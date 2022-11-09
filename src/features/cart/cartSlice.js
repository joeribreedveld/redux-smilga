import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

// Create a Redux slice of state for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// console.log(cartSlice);

// Export the reducer, either as a default or named export
export default cartSlice.reducer;