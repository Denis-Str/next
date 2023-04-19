import { wrapper } from "@/redux";
import axios from "axios";
import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { fetchHitsList } from "@/redux/hits";
import {loadMoreCatalogList, currentCategory, setIsLoading, isLoading} from "@/redux/catalog";
import {fetchCategories, fetchCatalog } from "@/redux/catalog/api";
import SalesList from "@/components/pages/Index/TopSales";
import Categories from "@/components/pages/catalog/Categories";
import ListView from "@/components/pages/catalog/ListView";
import Preloader from "@/components/common/Preloader";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchHitsList());
    await store.dispatch(fetchCategories());
    await store.dispatch(fetchCatalog());
  }
);

function HomePage() {
  const dispatch = useDispatch();
  const categoryId = useSelector(currentCategory);
  const loading = useSelector(isLoading);
  let [count, setCount] = useState(6);

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
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <SalesList />
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Categories />
        {loading ? <Preloader/> : <ListView />}
        <div className="text-center">
          <button className="btn btn-outline-primary" onClick={() => loadMore()}>Загрузить ещё</button>
        </div>
      </section>
    </>
  )
}

export default HomePage;
