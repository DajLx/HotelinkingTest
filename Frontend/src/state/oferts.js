import { createAction, createReducer } from "@reduxjs/toolkit";

export const setOfferts = createAction("SET_OFFERTS");

const initialState = [];

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setOfferts, (state, action) => {
    return action.payload;
  });
});

export default reducer;
