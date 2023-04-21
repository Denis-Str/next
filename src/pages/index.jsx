import { wrapper } from "@/redux";
import { fetchHitsList } from "@/redux/hits";
import {fetchCatalog, fetchCategories } from "@/redux/catalog/api";
import SalesList from "@/components/pages/Index/TopSales";
import Categories from "@/components/pages/catalog/Categories";
import ListView from "@/components/pages/catalog/ListView";
// import Empty from "@/layouts/empty";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchHitsList());
    await store.dispatch(fetchCategories());
    await store.dispatch(fetchCatalog());
  }
);

export default function HomePage() {
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

// HomePage.getLayout = function getLayout(page) {
//   return (
//     <Empty>
//       {page}
//     </Empty>
//   )
// }
