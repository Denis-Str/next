import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  catalogList,
  currentCategory,
  loadMoreCatalogList,
  setIsLoading,
  searchValue,
  isLoading,
  setSearchValue
} from "@/redux/catalog";
import ItemView from "@/components/pages/catalog/ListView/ItemView";
import Preloader from "@/components/common/Preloader";

export default function ListView() {
  const dispatch = useDispatch();
  let [count, setCount] = useState(6);
  let [disabledLoadMore, setDisabledLoadMore] = useState(true);

  const catalog = useSelector(catalogList);
  const categoryId = useSelector(currentCategory);
  const search = useSelector(searchValue);
  const loading = useSelector(isLoading);

  const filteredList = catalog.filter(({title}) => title.toLowerCase().includes(search));
  const currentCatalog = search ? filteredList : catalog;
  const catalogView = currentCatalog.length === 0 ? <div>По вашему запросу ни чего не найдено :(</div> : currentCatalog.map(item => <ItemView key={`${item.category}-${item.id}`} item={item}/>);

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
    setDisabledLoadMore(true);
    dispatch(setSearchValue(''))
  }, [categoryId]);

  useEffect(() => {
    if (catalog.length < 6) setDisabledLoadMore(false);
  }, []);

  if (loading) return <Preloader/>;
  return (
    <>
      <ul className="row">{catalogView}</ul>
      {
        disabledLoadMore && !search && <div className="text-center">
          <button className="btn btn-outline-primary" onClick={() => loadMore()}>Загрузить ещё</button>
        </div>
      }
    </>
  )
}
