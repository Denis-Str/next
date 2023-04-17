import styles from "./item.module.scss";

export default function ItemView({item}) {

  return (
    <li className={styles['item-comp']}>
      <div className={`card ${styles.card}`}>
        <img src={item.images[0]} className="card-img-top" alt="item.title" />
          <div className={`card-body ${styles['card-body']}`}>
            <h2 className={styles.title}>{item.title}</h2>
            <div className="card-text">{item.price}</div>
          </div>
      </div>
    </li>
  )
}
