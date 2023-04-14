import ItemView from "@/components/pages/Index/TopSales/ItemView";
import {useSelector} from "react-redux";
import {hitsList} from "@/redux/hits";

export default function SalesList() {
  const hits = useSelector(hitsList) || [];
  const listView = hits.map(item => <ItemView key={item.id} item={item} />)
  return (
    <ul className="sales-list-copm">
      {listView}
    </ul>
  )
}
