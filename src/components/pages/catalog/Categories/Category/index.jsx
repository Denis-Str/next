import styles from "@/pages/catalog/catalog.module.scss";

export default function Category({category}) {
  return (
    <li className="nav-item">
      <div className="nav-link">{category.title}</div>
    </li>
  )
}
