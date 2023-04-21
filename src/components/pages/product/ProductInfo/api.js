import axios from "axios";

export const fetchItem = async (id, setIsLoading, setItem) => {
  try {
    setIsLoading(true);
    const {data} = await axios.get(`/api/items/${id}`);
    setItem(data);
  } catch (e) {
    console.log(e)
  } finally {
    setIsLoading(false);
  }
}
