import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartRoot",
  initialState: {
    cart: [],
  },
  reducers: {},
});

export default cartSlice.reducer;
