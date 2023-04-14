import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import { hitsSlice } from "./hits";
import { errorsSlice } from "./errors";

const makeStore = () =>
  configureStore({
    reducer: {
      [hitsSlice.name]: hitsSlice.reducer,
      [errorsSlice.name]: errorsSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
