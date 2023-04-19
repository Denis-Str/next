import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {
  categoriesList,
  currentCategory,
  setCatalogList,
  setCurrentCategory,
  setIsLoading
} from "@/redux/catalog";
import Category from "@/components/pages/catalog/Categories/Category";
import styles from "@/pages/catalog/catalog.module.scss";
import ListView from "@/components/pages/catalog/ListView";

export default function Categories() {
  const categories = useSelector(categoriesList);
  const categoryID = useSelector(currentCategory);
  const dispatch = useDispatch();
  const style = categoryID === 0 ? 'nav-link active' : 'nav-link';

  const handleClick = async (id) => {
    dispatch(setCurrentCategory(id));
    dispatch(setIsLoading(true));
    try {
      const { data } = await axios.get(`/api/items/`, {
        params: {
          categoryId: id,
          offset: 0
        }
      });
      dispatch(setCatalogList(data));
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(setIsLoading(false));
    }
  }


  const list = categories.map(category => <Category key={category.id} category={category} handleClick={handleClick}/>)
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

  return (<ListView/>)
}
