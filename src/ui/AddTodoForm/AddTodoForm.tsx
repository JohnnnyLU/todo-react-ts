import styles from "./AddTodoForm.module.css"
import {useState} from "react";

type Props = {
  handleAddTodo: (value: string) => void,
}

export function AddTodoForm(props: Props) {
  const [value, setValue] = useState("")

  return (
    <form className={styles.form} onSubmit={(event) => {
      event.preventDefault()

      if (value.trim() !== "") {
        props.handleAddTodo(value.trim())
        setValue("")
      }
    }}>
      <input
        className={styles.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="New task title"
        autoFocus={true}
      />
      <button className={styles.button} type="submit">Add</button>
    </form>
  )
}