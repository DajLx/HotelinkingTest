import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import ofertsReducer from "./oferts";
import promosReducer from "./promos";

const store = configureStore({
  reducer: {
    user: userReducer,
    offerts: ofertsReducer,
    promos: promosReducer,
  },
});
export default store;
