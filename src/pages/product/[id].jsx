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
  let [counter, setCounter] = useState(1);
  const [item, setItem] = useState({id: null, images: [], sizes: []});

  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    if (id) fetchItem(id, setIsLoading, setItem)
  }, [id]);

  const increase = () => {
    if (counter >= 20) return;
    setCounter(counter = counter + 1);
  }
  const reduce = () => {
    if (counter <= 1) return;
    setCounter(counter = counter - 1);
  }
  const handleChangeCounter = (direction) => direction === 'increase' ? increase() : reduce();

  const handleAddToBasket = () => {
    dispatch(addProduct({...item, counter, currentSize}));
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
                <CounterView counter={counter} handleChangeCounter={handleChangeCounter} />
              </div>
              <button className="btn btn-danger btn-block btn-lg" onClick={() => handleAddToBasket()}>В корзину</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
