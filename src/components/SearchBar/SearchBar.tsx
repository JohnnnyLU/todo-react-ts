import styles from "./SearchBar.module.css"
import searchIcon from "../../assets/search-icon.svg"

type Props = {
  value: string
  onChangeSearch: (value: string) => void
}

export function SearchBar({value, onChangeSearch}: Props) {

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="Search task"
        value={value}
        onChange={(event) => onChangeSearch(event.target.value)}
      />
      <img
        className={styles.icon}
        src={searchIcon}
        alt=""
        aria-hidden="true"
      />
    </div>
  )
}
