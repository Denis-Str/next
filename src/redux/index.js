import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';
import { hitsSlice } from "./hits";
import { catalogSlice } from "./catalog";
import { errorsSlice } from "./errors";

const makeStore = () =>
  configureStore({
    reducer: {
      [hitsSlice.name]: hitsSlice.reducer,
      [catalogSlice.name]: catalogSlice.reducer,
      [errorsSlice.name]: errorsSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
