import {setError} from "@/redux/errors";
import axios from "axios";
import {setCatalogList, setCategoriesList} from "@/redux/catalog/index";

export const fetchCategories= () => async (dispatch) => {
  try {
    dispatch(setError(null));
    const { data } = await axios.get('/api/categories');
    dispatch(setCategoriesList(data));
  } catch (e) {
    // dispatch(setError(e));
  }
}

export const fetchCatalog= () => async (dispatch) => {
  try {
    dispatch(setError(null));
    const { data } = await axios.get('/api/items');
    dispatch(setCatalogList(data));
  } catch (e) {
    console.log(e)
    // dispatch(setError(e));
  }
}
