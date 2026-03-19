import styles from "./TodoToolbar.module.css"

type Props = {
  totalCount: number
  handleDeleteAllTodos: () => void
}

export function TodoToolbar({totalCount, handleDeleteAllTodos}: Props) {

  return (
    <div className={styles.toolbar}>
      <span className={styles.count}>Total Tasks: {totalCount}</span>
      <button
        className={styles.clearButton}
        onClick={handleDeleteAllTodos}
      >Delete All</button>
    </div>
  )
}