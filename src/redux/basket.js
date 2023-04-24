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
    },
    clearBasket: (state) => {
      state.list = [];
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.basket,
      };
    },
  }
})

export const { addProduct, removeProduct, clearBasket } = basketSlice.actions;
export const basketList = ({ basket }) =>  basket.list;

export default basketSlice.reducer;
