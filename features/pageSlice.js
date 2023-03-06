import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    view: "grid",
  },
  reducers: {
    changeView(state, action) {
      const view = action.payload;
      state.view = view;
    },
  },
});

export const { changeView } = pageSlice.actions;

export default pageSlice.reducer;
