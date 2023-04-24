import Link from "next/link";
import { useDispatch } from "react-redux";
import { removeProduct } from "@/redux/basket";

export default function TrView({item, index}) {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(removeProduct(item.id));

  return (
    <tr>
      <td scope="row">{ index + 1 }</td>
      <td>
        <Link href={`/product/${item.id}`}>{item.title}</Link>
      </td>
      <td>{item.currentSize}</td>
      <td>{item.count}</td>
      <td>{item.price} руб.</td>
      <td>{Math.round(item.count * item.price)} руб.</td>
      <td>
        <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove()}>Удалить</button>
      </td>
    </tr>
  )
}
