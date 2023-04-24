import { wrapper } from "@/redux";
import {useSelector} from "react-redux";
import { fetchHitsList, hitsList } from "@/redux/hits";
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

export default function HomePage() {
  const hits = useSelector(hitsList) || [];
  return (
    <>
      { hits.length > 0 && <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <SalesList />
      </section> }
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <Categories />
        <ListView />
      </section>
    </>
  )
}
