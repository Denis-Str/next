import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import Router from 'next/router';
import {basketList, clearBasket} from "@/redux/basket";
import TableView from "@/components/pages/card/TableView";
import OrderView from "@/components/pages/card/OrderView";

export default function CartPage() {
  const dispatch = useDispatch();
  const list = useSelector(basketList);
  const handleSend = async (form) => {
    try {
       await axios.post('/api/order', {
        owner: {
          phone: `${form.phone}`,
          address: `${form.address}`,
        },
        items: list
      });
       dispatch(clearBasket());
      await Router.push('/');
    } catch (e) {
      console.log(e)
    }
  };
  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <TableView list={list} />
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <OrderView handleSend={handleSend}  />
      </section>
    </>
  )
}
