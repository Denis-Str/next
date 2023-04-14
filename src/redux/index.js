import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import { hitsSlice } from "./hits";
import errorsReducer from "./errors";

const makeStore = () =>
  configureStore({
    reducer: {
      [hitsSlice.name]: hitsSlice.reducer,
      errors: errorsReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
