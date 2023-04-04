import Link from "next/link";
import styles from "./header.module.scss";
import {useState} from "react";

export default function AppHeader() {
  let [showSearch, setShowSearch] = useState(false);

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" href="/">
              <img src="/img/header-logo.png" alt="Bosa Noga" />
            </Link>
            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/">Главная</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/catalog">Каталог</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">О магазине</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contacts">Контакты</Link>
                </li>
              </ul>
              <div>
                <div className={styles.pics}>
                  <form data-id="search-form" className={`${styles['search-form']} form-inline ${showSearch ? '' : 'invisible'}`.trim()}>
                    <input className={`${styles['form-control']}`} placeholder="Поиск" />
                  </form>
                  <div className={`${styles.pic} ${styles.search}`} onClick={() => setShowSearch(showSearch = !showSearch)} />
                  <Link className={`${styles.pic} ${styles.cart}`} href="/cart">
                    <div className={styles['cart-full']}>1</div>
                    <div className="header-controls-cart-menu"></div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
