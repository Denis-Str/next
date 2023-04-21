import styles from "@/pages/catalog/catalog.module.scss";
import Categories from "@/components/pages/catalog/Categories";
import ListView from "src/components/pages/catalog/ListView";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue, searchValue} from "@/redux/catalog";
import {wrapper} from "@/redux";
import {fetchHitsList} from "@/redux/hits";
import {fetchCatalog} from "@/redux/catalog/api";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchHitsList());
    await store.dispatch(fetchCatalog());
  }
);

export default function CatalogPage() {
  const dispatch = useDispatch();
  const search = useSelector(searchValue);
  return (
    <>
      <section className={styles.catalog}>
        <h2 className="text-center">Каталог</h2>
        <form className={`${styles['search-form']} form-inline`}>
          <input value={search} className={`${styles['form-control']}`} placeholder="Поиск" onChange={(event) => dispatch(setSearchValue(event.target.value))}/>
        </form>
        <Categories />
        <ListView />
      </section>
    </>
  )
}
