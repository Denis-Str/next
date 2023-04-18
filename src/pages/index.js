import { wrapper } from "@/redux";
import {useState, useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import { fetchHitsList, isLoading } from "@/redux/hits";
import {fetchCategories, fetchCatalog, loadMoreCatalogList, currentCategory} from "@/redux/catalog";
import Preloader from "@/components/common/Preloader";
import SalesList from "@/components/pages/Index/TopSales";
import Categories from "@/components/pages/catalog/Categories";
import ListView from "@/components/pages/catalog/ListView";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchHitsList());
    await store.dispatch(fetchCategories());
    await store.dispatch(fetchCatalog());
  }
);

function HomePage() {
  const dispatch = useDispatch();
  const hitsIsLoading = useSelector(isLoading);
  const categoryId = useSelector(currentCategory);
  let [count, setCount] = useState(6);
  const loadMore = async () => {
    try {
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
    }
  };

  useEffect(() => {
    setCount(count = 6);
  }, [categoryId])

  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        { hitsIsLoading ? <Preloader /> : <SalesList /> }
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Categories />
        <ListView />
        <div className="text-center">
          <button className="btn btn-outline-primary" onClick={() => loadMore()}>Загрузить ещё</button>
        </div>
      </section>
    </>
  )
}

export default HomePage;
