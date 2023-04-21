import Link from "next/link";
import CartView from "@/components/general/AppHeader/CartView";
import {useRouter} from "next/router";
import navMenu from "@/mock/navMenu.json";
import {useSelector} from "react-redux";
import {basketList} from "@/redux/basket";

export default function AppHeader() {
  const basket = useSelector(basketList);
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
                {basket.length > 0 && <CartView />}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
