import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    catalog: [],
    categories: [],
    currentCategory: 0,
    searchValue: '',
    isLoading: false,
  },
  reducers: {
    setCatalogList: (state, {payload}) => {
      state.catalog = payload;
    },
    loadMoreCatalogList: (state, {payload}) => {
      state.catalog = [...state.catalog, ...payload];
    },
    setCategoriesList: (state, {payload}) => {
      state.categories = payload;
    },
    setCurrentCategory: (state, {payload}) => {
      state.currentCategory = payload;
    },
    setSearchValue: (state, {payload}) => {
     state.searchValue = payload.toLowerCase();
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

export const {
  setIsLoading,
  setCategoriesList,
  setCatalogList,
  loadMoreCatalogList,
  setSearchValue,
  setCurrentCategory
} = catalogSlice.actions;
export const catalogList = ({ catalog }) =>  catalog.catalog;
export const categoriesList = ({ catalog }) =>  catalog.categories;
export const currentCategory = ({ catalog }) =>  catalog.currentCategory;
export const searchValue = ({ catalog }) =>  catalog.searchValue;
export const isLoading = ({ catalog }) =>  catalog.isLoading;

export default catalogSlice.reducer;
