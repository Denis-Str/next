import { useSelector } from "react-redux";
import { catalogList } from "@/redux/catalog";
import ItemView from "@/components/pages/catalog/ListView/ItemView";

export default function ListView() {
  const catalog = useSelector(catalogList);
  const catalogView = catalog.map(item => <ItemView key={`${item.category}-${item.id}`} item={item}/>)
  return (
    <ul className="row">
      {catalogView}
    </ul>
  )
}
