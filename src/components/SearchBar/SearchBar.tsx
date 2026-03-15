import styles from "./SearchBar.module.css"
import searchIcon from "../../assets/search-icon.svg"

export function SearchBar() {

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} placeholder="Search task"/>
      <img className={styles.icon} src={searchIcon} alt="" aria-hidden="true" />
    </div>
  )
}
