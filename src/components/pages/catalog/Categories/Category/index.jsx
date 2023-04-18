import {useSelector, useDispatch} from "react-redux";
import {currentCategory, setCatalogList} from "@/redux/catalog";
import {setCurrentCategory} from "@/redux/catalog";
import axios from "axios";

export default function Category({category}) {
  const dispatch = useDispatch();
  const categoryID = useSelector(currentCategory);
  const style = categoryID === category.id ? 'nav-link active' : 'nav-link';
  const handleClick = async (id) => {
    dispatch(setCurrentCategory(id));
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
    }
  };

  return (
    <>
      <li className="nav-item">
        <div className={style} onClick={() => handleClick(category.id)}>{category.title}</div>
      </li>
    </>
  )
}
