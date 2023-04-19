import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import Preloader from "@/components/common/Preloader";
import style from "./item.module.scss";

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentSize, setCurrentSize] = useState(0);
  const [item, setItem] = useState({id: null, images: [], sizes: []});
  const router = useRouter();
  const {id} = router.query;
  const fetchItem = async (id) => {
    try {
      setIsLoading(true);
      const {data} = await axios.get(`/api/items/${id}`);
      setItem(data);
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) fetchItem(id)
  }, [id]);

  if (isLoading && !id) return <Preloader/>;

  const sizesList = item.sizes.map(({size, available}) =>
    <span
      className={`${style.size} ${!available && style.disabled} ${currentSize === size && style.selected}`}
      key={size}
      onClick={() => {
        if (currentSize === size) {
          setCurrentSize(0);
          return;
        }
        setCurrentSize(size);
      }}
    >{size}
  </span>);

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
              <table className="table table-bordered">
                <tbody>
                <tr>
                  <td>Артикул</td>
                  <td>{item.sku}</td>
                </tr>
                <tr>
                  <td>Производитель</td>
                  <td>{item.manufacturer}</td>
                </tr>
                <tr>
                  <td>Цвет</td>
                  <td>{item.color}</td>
                </tr>
                <tr>
                  <td>Материалы</td>
                  <td>{item.material}</td>
                </tr>
                <tr>
                  <td>Сезон</td>
                  <td>{item.season}</td>
                </tr>
                <tr>
                  <td>Повод</td>
                  <td>{item.reason}</td>
                </tr>
                </tbody>
              </table>
              <div className="text-center">
                Размеры в наличии:
                <p>
                  {sizesList}
                </p>
                <p>Количество:
                  <span className="btn-group btn-group-sm pl-2">
                      <button className="btn btn-secondary">-</button>
                      <span className="btn btn-outline-primary">1</span>
                      <button className="btn btn-secondary">+</button>
                  </span>
                </p>
              </div>
              <button className="btn btn-danger btn-block btn-lg">В корзину</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
