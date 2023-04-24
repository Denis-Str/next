import {useSelector} from "react-redux";
import {basketList} from "@/redux/basket";
import TableView from "@/components/pages/card/TableView";

export default function CartPage() {
  const list = useSelector(basketList);

  return (
    <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <TableView list={list} />
      </section>
      <section className="order">
        <h2 className="text-center">Оформить заказ</h2>
        <div className="card">
          <form className="card-body">
            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input className="form-control" id="phone" placeholder="Ваш телефон"/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Адрес доставки</label>
              <input className="form-control" id="address" placeholder="Адрес доставки"/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="agreement"/>
              <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
            </div>
            <button type="submit" className="btn btn-outline-secondary">Оформить</button>
          </form>
        </div>
      </section>
    </>
  )
}
