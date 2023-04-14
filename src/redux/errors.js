import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";

export const errorsSlice = createSlice({
  name: 'errors',
  initialState: {
    message: null
  },
  reducers: {
    setError: (state, {payload}) => {
      state.message = payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.errors,
      };
    },
  }
})

export const {setError} = errorsSlice.actions;
export const errorMessage = ({errors}) => errors.message;

export default errorsSlice.reducer
