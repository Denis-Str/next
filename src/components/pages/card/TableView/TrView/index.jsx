import Link from "next/link";
import { useDispatch } from "react-redux";
import { removeProduct } from "@/redux/basket";

export default function TrView({item}) {
  const dispatch = useDispatch();
  const handleRemove = () => dispatch(removeProduct(item.id));

  return (
    <tr>
      <td scope="row">1</td>
      <td>
        <Link href={`/product/${item.id}`}>{item.title}</Link>
      </td>
      <td>{item.currentSize}</td>
      <td>{item.counter}</td>
      <td>{item.price} руб.</td>
      <td>{Math.round(item.counter * item.price)} руб.</td>
      <td>
        <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove()}>Удалить</button>
      </td>
    </tr>
  )
}
