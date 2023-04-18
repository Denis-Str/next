import {useDispatch, useSelector} from "react-redux";
import {categoriesList, currentCategory, isLoading, setCatalogList, setCurrentCategory} from "@/redux/catalog";
import Preloader from "@/components/common/Preloader";
import Category from "@/components/pages/catalog/Categories/Category";
import styles from "@/pages/catalog/catalog.module.scss";
import axios from "axios";

export default function Categories() {
  const categories = useSelector(categoriesList);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  const categoryID = useSelector(currentCategory);
  const style = categoryID === 0 ? 'nav-link active' : 'nav-link';
  const handleClick = async () => {
    dispatch(setCurrentCategory(0));
    try {
      const { data } = await axios.get(`/api/items/`, {
        params: {
          categoryId: 0,
          offset: 0
        }
      });
      dispatch(setCatalogList(data));
    } catch (e) {
      console.log(e)
    }
  }


  const list = categories.map(category => <Category key={category.id} category={category}/>)
  const ListView = () => (
    <nav className="navbar navbar-expand-sm justify-content-center">
      <ul className={`${styles.categories} navbar-nav mr-auto`}>
        <li className="nav-item">
          <div className={style} onClick={() => handleClick(0)}>Все</div>
        </li>
        {list}
      </ul>
    </nav>
  )

  return (
    <>
      {loading ? <Preloader/> : <ListView/>}
    </>
  )
}
