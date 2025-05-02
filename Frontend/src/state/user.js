import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

const initialState = { mail: "mail@mail.com", clave: "perra loca" };

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    return action.payload;
  });
});

export default reducer;
