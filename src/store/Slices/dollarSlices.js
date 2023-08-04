import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
   {
      id: 1,
      dollar: 234,
      dollarBlue: 566,
   },
];

const initialState = (() => {
   const persistedState = localStorage.getItem("__redux__state__");
   return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const dollarSlice = createSlice({
   name: "dollar",
   initialState,
   reducers: {
      increment: (state /* action */) => {
         state.counter += 1;
      },
   },
});

export const { increment } = dollarSlice.actions;
