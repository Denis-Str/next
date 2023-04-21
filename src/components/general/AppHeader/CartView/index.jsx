import Link from "next/link";
import {useState} from "react";
import {useSelector} from "react-redux";
import {basketList} from "@/redux/basket";
import styles from "@/components/general/AppHeader/header.module.scss"

export default function CartView() {
  const basket = useSelector(basketList);
  let [showSearch, setShowSearch] = useState(false);

  return (
    <div className={styles.pics}>
      <form data-id="search-form"
            className={`${styles['search-form']} form-inline ${showSearch ? '' : 'invisible'}`.trim()}>
        <input className={`${styles['form-control']}`} placeholder="Поиск"/>
      </form>
      <div className={`${styles.pic} ${styles.search}`}
           onClick={() => setShowSearch(showSearch = !showSearch)}/>
      <Link className={`${styles.pic} ${styles.cart}`} href="/cart">
        <div className={styles['cart-full']}>{basket.length}</div>
        <div className="header-controls-cart-menu"></div>
      </Link>
    </div>
  )
}
