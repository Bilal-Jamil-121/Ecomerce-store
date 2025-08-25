"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import cartReducer from "./cart/cartSlice";  // ✅ correct import

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
