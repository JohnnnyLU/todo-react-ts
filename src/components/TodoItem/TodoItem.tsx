//import styles from "./TodoItem.module.css"
import type {Todo} from "../../types.ts";

type Props = {
  todo: Todo
  handleToggleTodo: (id: string) => void
}

export function TodoItem({todo, handleToggleTodo}: Props) {

  return (
    <li>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleTodo(todo.id)}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
    </li>
  )
}