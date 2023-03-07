import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    view: "grid",
    customSelectOpened: false,
    filters: {},
  },
  reducers: {
    changeView(state, action) {
      const view = action.payload;
      state.view = view;
    },
    toggleCustomSelect(state, action) {
      state.customSelectOpened = !state.customSelectOpened;
    },
  },
});

export const { changeView, toggleCustomSelect } = pageSlice.actions;

export default pageSlice.reducer;
