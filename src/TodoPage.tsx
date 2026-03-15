import {TodoHeader} from "./components/TodoHeader/TodoHeader.tsx";
import {AddTodoForm} from "./components/AddTodoForm/AddTodoForm.tsx";
import {SearchBar} from "./components/SearchBar/SearchBar.tsx";
import {TodoToolbar} from "./components/TodoToolbar/TodoToolbar.tsx";
import {TodoList} from "./components/TodoList/TodoList.tsx";
import {useState} from "react";
import type {Todo} from "./types.ts";

export function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      title: "Learn React",
      completed: true,
    },
    {
      id: "2",
      title: "Learn TypeScript",
      completed: false,
    },
  ])

  const handleAddTodo = (value: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: value,
      completed: false,
    }
    setTodos(prevTodos => {
      return [...prevTodos, newTodo]
    })
  }

  function handleToggleTodo (id: string) {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    })
  }

  return (
    <div className="TodoPage">
      <TodoHeader />
      <AddTodoForm handleAddTodo={handleAddTodo}/>
      <SearchBar />
      <TodoToolbar />
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo}/>
    </div>
  )
}
