import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import axios from "axios";
// import {setError} from "./errors";

export const fetchHitsList = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { data } = await axios.get('http://localhost:7070/api/top-sales');
    // dispatch(setError(''));
    dispatch(setHitsList(data));
  } catch (e) {
    // dispatch(setError(e.message));
  } finally {
    dispatch(setIsLoading(false));
  }
}
export const hitsSlice = createSlice({
  name: 'hits',
  initialState: {
    hitsList: [],
    isLoading: false,
  },
  reducers: {
    setHitsList: (state, {payload}) => {
      state.hitsList = payload;
    },
    setIsLoading: (state, {payload}) => {
      state.isLoading = payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.hits,
      };
    },
  }
})

export const { setIsLoading, setHitsList } = hitsSlice.actions;
export const hitsList = ({ hits }) =>  hits.hitsList;

export default hitsSlice.reducer;
