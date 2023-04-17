import Link from "next/link";
import styles from "@/pages/catalog/catalog.module.scss";

export default function ItemView({item}) {
  return (
    <li className={`col-4 ${styles['item-comp']}`}>
      <div className={`card ${styles['item-card']}`}>
        <div className={styles['img-wrap']}>
          <img
            src={item.images[0]}
            className={`card-img-top img-fluid`}
            alt={item.title}
          />
        </div>
        <div className={styles['card-content']}>
          <p className="card-text">{item.title}</p>
          <p className="card-text">{item.price} руб.</p>
          <Link href={`/products/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
        </div>
      </div>
    </li>
  )
}
