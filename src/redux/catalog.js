import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import axios from "axios";
import {setError} from "./errors";

// export const fetchHitsList = () => async (dispatch) => {
//   try {
//     dispatch(setIsLoading(true));
//     const { data } = await axios.get('http://localhost:7070/api/top-sales');
//     dispatch(setError(null));
//     dispatch(setHitsList(data));
//   } catch (e) {
//     dispatch(setError(e));
//   } finally {
//     dispatch(setIsLoading(false));
//   }
// }
export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    catalog: [],
    categories: [],
    isLoading: false,
  },
  reducers: {
    setCatalogList: (state, {payload}) => {
      state.catalog = payload;
    },
    setCategoriesList: (state, {payload}) => {
      state.categories = payload;
    },
    setIsLoading: (state, {payload}) => {
      state.isLoading = payload;
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

export const { setIsLoading, setHitsList } = catalogSlice.actions;
export const catalogList = ({ catalog }) =>  catalog.catalog;
export const categoriesList = ({ catalog }) =>  catalog.categories;
export const isLoading = ({ catalog }) =>  catalog.isLoading;

export default catalogSlice.reducer;
