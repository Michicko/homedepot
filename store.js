import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import pageSlice from "./features/pageSlice";
import cartSlice from "./features/cartSlice";

export default configureStore({
  reducer: {
    productsRoot: productsReducer,
    page: pageSlice,
    cartRoot: cartSlice,
  },
});
