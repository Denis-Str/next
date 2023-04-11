import { configureStore } from "@reduxjs/toolkit";
import hitsReducer from "./hits";
import errorsReducer from "./errors";

export default configureStore({
  reducer: {
    hits: hitsReducer,
    errors: errorsReducer,
  },
})
