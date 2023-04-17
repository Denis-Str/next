import styles from "@/pages/catalog/catalog.module.scss";
import Categories from "@/components/pages/catalog/Categories";
import ListView from "src/components/pages/catalog/ListView";

export default function CatalogPage() {
  return (
    <>
      <section className={styles.catalog}>
        <h2 className="text-center">Каталог</h2>
        <form className={`${styles['search-form']} form-inline`}>
          <input className={`${styles['form-control']}`} placeholder="Поиск"/>
        </form>
        <Categories />
        <ListView />
        <div className="text-center">
          <button className="btn btn-outline-primary">Загрузить ещё</button>
        </div>
      </section>
    </>
  )
}
