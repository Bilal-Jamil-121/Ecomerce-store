"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/app/lib/axios";

const initialState = {
  value: 0,
  users: [],
  status: "idle",
  error: null,
  searchQuery: "",
  categoryFilter: "All",
  ColorFilter: "All"
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await api.get("/api/products"); 
  return res.data;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
      setSearchQuery:(state, action)=>{
        state.searchQuery = action.payload
      },
      setCategoryFilter:(state, action)=>{
        state.categoryFilter= action.payload
      },
      setColorFilter:(state,action)=>{
            state.ColorFilter= action.payload
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const {setSearchQuery, setCategoryFilter ,setColorFilter} = counterSlice.actions;
export default counterSlice.reducer;


