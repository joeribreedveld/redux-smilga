import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Url to fetch cart items from
const url = "https://course-api.com/react-useReducer-cart-project";

// Define a type for the slice state
const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

// Create an async thunk to fetch cart items
export const getCardItems = createAsyncThunk(
  "cart/getCardItems",
  async (name, thunkAPI) => {
    try {
      console.log(thunkAPI.getState());
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

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
    // Calculate the total and amount of items in the cart
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      // Loop through the cart items and add up the total and amount
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      // Update the state with the new totals
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    // Handle the pending state of the getCardItems async thunk
    [getCardItems.pending]: (state) => {
      state.isLoading = true;
    },

    // Handle the fulfilled state of the getCardItems async thunk
    [getCardItems.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.cartItems = action.payload;
    },

    // Handle the rejected state of the getCardItems async thunk
    [getCardItems.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

// Export the actions generated from the slice
export const { clearCart, removeItem, changeAmount, calculateTotals } =
  cartSlice.actions;

// console.log(cartSlice);

// Export the reducer, either as a default or named export
export default cartSlice.reducer;
