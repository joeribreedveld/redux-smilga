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
    // Clear the cart
    clearCart: (state) => {
      state.cartItems = [];
    },
    // Remove an item from the cart
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    // Increment or decrement the quantity of an item in the cart
    changeAmount: (state, action) => {
      // Find the item in the cart that matches the id passed in
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      // Increase the quantity of the item
      if (action.payload.function === "increase") {
        cartItem.amount += 1;
      }
      // Don't allow the amount to go below 1
      if (action.payload.function === "decrease") {
        cartItem.amount -= 1;
      }
    },
  },
});

// Export the actions generated from the slice
export const { clearCart, removeItem, changeAmount } = cartSlice.actions;

// console.log(cartSlice);

// Export the reducer, either as a default or named export
export default cartSlice.reducer;
