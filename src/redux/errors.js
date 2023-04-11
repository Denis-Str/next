import {createSlice} from "@reduxjs/toolkit";

export const errors = createSlice({
  name: 'services',
  initialState: {
    error: null
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
})

export const {setError} = errors.actions;
export const errorMessage = ({error}) => error.error;

export default errors.reducer
