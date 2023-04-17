import axios from "axios";
import { useState, useEffect } from 'react';
import Preloader from "@/components/common/Preloader";
import Category from "@/components/pages/catalog/Categories/Category";
import styles from "@/pages/catalog/catalog.module.scss";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get('http://localhost:7070/api/categories');
        setCategories(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (isLoading)  return (<Preloader/>);
  if (categories) {
    const list = categories.map(category => <Category key={category.id} category={category} />);
    return (
      <ul className={`${styles.categories} nav justify-content-center`}>
        <li className="nav-item">
          <div className="nav-link active">Все</div>
        </li>
        {list}
      </ul>
    )
  }
}
