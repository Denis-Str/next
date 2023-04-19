import {useDispatch, useSelector} from "react-redux";
import {catalogList, currentCategory, loadMoreCatalogList, setIsLoading} from "@/redux/catalog";
import ItemView from "@/components/pages/catalog/ListView/ItemView";
import axios from "axios";
import {useEffect, useState} from "react";

export default function ListView() {
  const catalog = useSelector(catalogList);
  const categoryId = useSelector(currentCategory);
  let [count, setCount] = useState(6);
  const dispatch = useDispatch();
  const catalogView = catalog.map(item => <ItemView key={`${item.category}-${item.id}`} item={item}/>);

  const loadMore = async () => {
    try {
      dispatch(setIsLoading(true));
      const { data } = await axios.get(`/api/items/`, {
        params: {
          categoryId,
          offset: count
        }
      });
      setCount(count = count + 6);
      dispatch(loadMoreCatalogList(data));
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    setCount(count = 6);
  }, [categoryId])

  return (
    <>
      <ul className="row">
        {catalogView}
      </ul>
      <div className="text-center">
        <button className="btn btn-outline-primary" onClick={() => loadMore()}>Загрузить ещё</button>
      </div>
    </>
  )
}
