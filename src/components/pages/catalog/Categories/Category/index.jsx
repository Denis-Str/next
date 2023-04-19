import {useSelector} from "react-redux";
import {currentCategory} from "@/redux/catalog";

export default function Category({category, handleClick}) {
  const categoryID = useSelector(currentCategory);
  const style = categoryID === category.id ? 'nav-link active' : 'nav-link';

  return (
    <>
      <li className="nav-item">
        <div className={style} onClick={() => handleClick(category.id)}>{category.title}</div>
      </li>
    </>
  )
}
