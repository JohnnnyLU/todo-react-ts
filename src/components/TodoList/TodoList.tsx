//import styles from "./TodoList.module.css"
import type {Todo} from "../../types.ts";
import {TodoItem} from "../TodoItem/TodoItem.tsx";

type Props = {
  todos: Todo[]
  handleToggleTodo: (id: string) => void
}

export function TodoList(props: Props) {

  return (
    <ul>
      {
        props.todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggleTodo={props.handleToggleTodo}
            />
          )
        })
      }
    </ul>
  )
}