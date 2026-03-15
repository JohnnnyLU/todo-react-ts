//import styles from "./AddTodoForm.module.css"
import {useState} from "react";

type Props = {
  handleAddTodo: (value: string) => void,
}

export function AddTodoForm(props: Props) {
  const [value, setValue] = useState("")

  return (
    <form onSubmit={(event) => {
      event.preventDefault()

      if (value.trim() !== "") {
        props.handleAddTodo(value)
        setValue("")
      }
    }}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="New task title"
      />
      <button type="submit">Add</button>
    </form>
  )
}