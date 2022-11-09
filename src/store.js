import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

// Create a Redux store holding the state of your app.
export const store = configureStore({
  reducer: {
    // Define a top-level state field named `cart`, handled by `cartReducer`
    cart: cartReducer,
  },
});
