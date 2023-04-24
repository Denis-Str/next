import TrView from "@/components/pages/card/TableView/TrView";

export default function TableView({list}) {
  const trElem = list.map((item, index) => <TrView item={item} index={index} key={item.id} />);
  const totalCount = list.reduce((currentSum, { counter, price }) => currentSum + (counter * price), 0);

  return (
    <table className="table table-bordered">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Название</th>
        <th scope="col">Размер</th>
        <th scope="col">Кол-во</th>
        <th scope="col">Стоимость</th>
        <th scope="col">Итого</th>
        <th scope="col">Действия</th>
      </tr>
      </thead>
      <tbody>
      { trElem }
      <tr>
        <td colSpan="5" className="text-right">Общая стоимость</td>
        <td>{totalCount} руб.</td>
      </tr>
      </tbody>
    </table>
  )
}
