import styles from "./item.module.scss";
import Link from "next/link";

export default function ItemView({item}) {

  return (
    <li className={styles['item-comp']}>
      <div className={`card ${styles.card}`}>
        <div className={styles['img-wrap']}>
          <img src={item.images[0]} className="card-img-top" alt="item.title" />
        </div>
          <div className={`card-body ${styles['card-body']}`}>
            <h2 className={styles.title}>{item.title}</h2>
            <div className="card-text">{item.price}</div>
            <Link href={`/product/${item.id}`}>Заказать</Link>
          </div>
      </div>
    </li>
  )
}
