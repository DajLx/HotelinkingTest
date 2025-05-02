import { createAction, createReducer } from "@reduxjs/toolkit";

export const setPromo = createAction("SET_PROMOS");
export const addPromo = createAction("ADD_PROMOS");
export const checkCode = createAction("CHECK_CODE");

const initialState = [];

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setPromo, (state, action) => {
    return action.payload;
  });
  builder.addCase(addPromo, (state, action) => {
    return state[0] ? [...state, action.payload] : [action.payload];
  });
  builder.addCase(checkCode, (state, action) => {
    return state.map((promo) => {
      if (action.payload === promo.id) {
        return { ...promo, canjeado: true };
      }
      return promo;
    });
  });
});

export default reducer;
