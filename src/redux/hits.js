import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {setError} from "./errors";

export const fetchHitsList = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { data } = await axios.get('http://localhost:7070//api/top-sales');
    dispatch(setError(''));
    return data;
    // dispatch(setHitsList(data));
  } catch (e) {
    dispatch(setError(e.message));
    return [];
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
  }
})

export const { setIsLoading, setHitsList } = hitsSlice.reducer;

export default hitsSlice.reducer;
