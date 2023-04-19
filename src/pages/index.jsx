import { wrapper } from "@/redux";
import {useSelector} from "react-redux";
import { fetchHitsList } from "@/redux/hits";
import { isLoading} from "@/redux/catalog";
import {fetchCatalog, fetchCategories } from "@/redux/catalog/api";
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
  const loading = useSelector(isLoading);

  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <SalesList />
      </section>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Categories />
        <ListView />
      </section>
    </>
  )
}

export default HomePage;
