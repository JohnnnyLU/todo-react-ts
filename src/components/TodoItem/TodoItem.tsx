import styles from "./TodoItem.module.css"
import type {Todo} from "../../types.ts";

type Props = {
  todo: Todo
  handleToggleTodo: (id: string) => void
  handleDeleteTodo: (id: string) => void
}

export function TodoItem({todo, handleToggleTodo, handleDeleteTodo}: Props) {
  const checkboxId = `task-${todo.id}`
  const titleClassName = todo.completed
    ? `${styles.title} ${styles.titleCompleted}`
    : styles.title

  return (
    <li className={styles.item}>
      <input
        className={styles.checkbox}
        id={checkboxId}
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleTodo(todo.id)}
      />
      <label className={titleClassName} htmlFor={checkboxId}>{todo.title}</label>
      <button
        className={styles.deleteButton}
        type="button"
        aria-label="Delete Task"
        onClick={() => handleDeleteTodo(todo.id)}
      >×</button>
    </li>
  )
}
