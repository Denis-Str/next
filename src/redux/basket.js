import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    list: []
  },
  reducers: {
    addProduct: (state, {payload}) => {
      const index = state.list.findIndex(({id}) => id === payload.id);
      if (index !== -1) state.list[index] = payload;
      else state.list.push(payload);
    },
    removeProduct: (state, {payload}) => {
      state.list = state.list.filter(({id}) => id !== payload);
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.catalog,
      };
    },
  }
})

export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
