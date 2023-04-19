import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {catalogList, currentCategory, loadMoreCatalogList, setIsLoading, isLoading} from "@/redux/catalog";
import ItemView from "@/components/pages/catalog/ListView/ItemView";
import Preloader from "@/components/common/Preloader";

export default function ListView() {
  const dispatch = useDispatch();
  let [count, setCount] = useState(6);
  let [disabledLoadMore, setDisabledLoadMore] = useState(true);

  const catalog = useSelector(catalogList);
  const categoryId = useSelector(currentCategory);
  const loading= useSelector(isLoading);
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
      setDisabledLoadMore(data.length >= 6);
      dispatch(loadMoreCatalogList(data));
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    setCount(count = 6);
  }, [categoryId]);

  useEffect(() => {
    if (catalog.length < 6) setDisabledLoadMore(false);
  }, []);

  if (loading) return <Preloader/>;
  return (
    <>
      <ul className="row">{catalogView}</ul>
      {
        disabledLoadMore && <div className="text-center">
          <button className="btn btn-outline-primary" onClick={() => loadMore()}>Загрузить ещё</button>
        </div>
      }
    </>
  )
}
