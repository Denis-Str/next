import Link from "next/link";
import styles from "./header.module.scss";
import {useState} from "react";
import {useRouter} from "next/router";
import navMenu from "@/mock/navMenu.json";


export default function AppHeader() {
  let [showSearch, setShowSearch] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;

  const navLinks = navMenu.map(({path, name}) =>
    <li className="nav-item" key={path}>
      <Link href={path} className={`${currentRoute === path ? 'nav-link active' : 'nav-link'}`}>{name}</Link>
    </li>)

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" href="/">
              <img src="/img/header-logo.png" alt="Bosa Noga"/>
            </Link>
            <div className="collapase navbar-collapse justify-content-between" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                {navLinks}
              </ul>
              <div>
                <div className={styles.pics}>
                  <form data-id="search-form"
                        className={`${styles['search-form']} form-inline ${showSearch ? '' : 'invisible'}`.trim()}>
                    <input className={`${styles['form-control']}`} placeholder="Поиск"/>
                  </form>
                  <div className={`${styles.pic} ${styles.search}`}
                       onClick={() => setShowSearch(showSearch = !showSearch)}/>
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
