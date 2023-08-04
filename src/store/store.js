import { configureStore } from "@reduxjs/toolkit";
import { localStorageSave } from "../middlewares/";
import { dollarSlice } from "./Slices/";

export const store = configureStore({
   reducer: {
      dollarApp: dollarSlice.reducer,
   },
   middleware: [localStorageSave],
});
