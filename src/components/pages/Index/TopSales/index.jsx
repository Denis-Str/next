import ItemView from "@/components/pages/Index/TopSales/ItemView";
import {useSelector} from "react-redux";
import {hitsList} from "@/redux/hits";
import styles from "./salesList.module.scss";

export default function SalesList() {
  const hits = useSelector(hitsList) || [];
  const listView = hits.map(item => <ItemView key={item.id} item={item} />)
  return (
    <ul className={styles['sales-list-comp']}>
      {listView}
    </ul>
  )
}
