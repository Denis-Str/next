import styles from "./index.module.scss";

export default function HomePage() {
  return (
    <div className="row">
      <div className="col">
        <div className={styles.banner}>
          <img src="/img/banner.jpg" className="img-fluid" alt="К весне готовы!"/>
          <h2 className={styles['banner-header']}>К весне готовы!</h2>
        </div>
        <section className={styles['top-sales']}>
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
        <section className={styles.catalog}>
          <h2 className="text-center">Каталог</h2>
          <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </div>
    </div>
  )
}
