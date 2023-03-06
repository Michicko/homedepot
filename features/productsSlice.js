import { createSlice } from "@reduxjs/toolkit";
export const productsSlice = createSlice({
  name: "productsRoot",
  initialState: {
    categories: [],
    products: [],
  },
  reducers: {},
});

// Action creators are generated for each case reducer function

export default productsSlice.reducer;
