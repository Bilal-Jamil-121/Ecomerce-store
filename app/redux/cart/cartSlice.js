"use client";
import { createSlice } from "@reduxjs/toolkit";

const clamp5 = (n) => Math.max(1, Math.min(5, Number(n) || 1));

const initialState = {
                     cart: [],
                    color:"",
 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {

      console.log(state,"state")
      console.log(action,"action")
      const incoming = action.payload || {};
      const incomingId = String(incoming.id); // 🔑 normalize id

      const existing = state.cart.find((it) => String(it.id) === incomingId);

      if (existing) {
        const inc = Number(incoming.amount ?? 1);
        const safeInc = Number.isFinite(inc) ? inc : 1;
        existing.amount = Math.min(5, (existing.amount || 1) + safeInc);
      } else {
        state.cart.push({
          ...incoming,
          id: incomingId,                // 🔑 normalize id
          amount: clamp5(incoming.amount),
        });
      }
    },

    increaseAmount: (state, action) => {
      const id = String(action.payload); // 🔑 normalize id
      const item = state.cart.find((i) => String(i.id) === id);
      if (item && item.amount < 5) item.amount += 1;
    },

    decreaseAmount: (state, action) => {
      const id = String(action.payload); // 🔑 normalize id
      const item = state.cart.find((i) => String(i.id) === id);
      if (item && item.amount > 1) item.amount -= 1;
    },

    removeFromCart: (state, action) => {
      const id = String(action.payload); // 🔑 normalize id
      state.cart = state.cart.filter((i) => String(i.id) !== id);
    },

    clearCart: (state) => {
      state.cart = [];
    },
    setColor: (state,action)=>{
         state.color = action.payload
    }
  },
});

export const {
  addToCart,
  increaseAmount,
  decreaseAmount,
  removeFromCart,
  clearCart,
  setColor,
} = cartSlice.actions;

export default cartSlice.reducer;
