import ItemView from "@/components/pages/Index/TopSales/ItemView";

export default function SalesList({list}) {
  const listView = list.map(item => <ItemView key={item.id} item={item} />)
  return (
    <ul className="sales-list-copm">
      {listView}
    </ul>
  )
}
