import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchItem} from "@/components/pages/product/ProductInfo/api";
import {addProduct} from "@/redux/basket";
import Preloader from "@/components/common/Preloader";
import TableView from "@/components/pages/product/TableView";
import CounterView from "@/components/pages/product/CounterView";
import ProductInfo from "@/components/pages/product/ProductInfo";
import style from "./item.module.scss";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [currentSize, setCurrentSize] = useState(0);
  const [item, setItem] = useState({id: null, images: [], sizes: []});
  let [count, setCounter] = useState(1);

  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    if (id) fetchItem(id, setIsLoading, setItem)
  }, [id]);

  const increase = () => {
    if (count >= 20) return;
    setCounter(count = count + 1);
  }
  const reduce = () => {
    if (count <= 1) return;
    setCounter(count = count - 1);
  }
  const handleChangeCounter = (direction) => direction === 'increase' ? increase() : reduce();

  const handleAddToBasket = () => {
    dispatch(addProduct({...item, count, currentSize}));
  }

  if (isLoading && !id) return <Preloader/>;

  return (
    <div className="row">
      <div className="col">
        <section className={style['catalog-item']}>
          <h2 className="text-center">{item.title}</h2>
          <div className="row">
            <div className="col-5">
              {item.images?.length > 0 && <img src={item.images[0]} className="img-fluid" alt={item.title}/>}
            </div>
            <div className="col-7">
              <TableView item={item} />
              <div className="text-center">
                <ProductInfo item={item} currentSize={currentSize} setCurrentSize={setCurrentSize} />
                <CounterView count={count} handleChangeCounter={handleChangeCounter} />
              </div>
              <button className={`btn btn-danger btn-block btn-lg ${currentSize === 0 && 'disabled'}`} onClick={() => handleAddToBasket()}>В корзину</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
