import {TodoHeader} from "./components/TodoHeader/TodoHeader.tsx";
import {AddTodoForm} from "./components/AddTodoForm/AddTodoForm.tsx";
import {SearchBar} from "./components/SearchBar/SearchBar.tsx";
import {TodoToolbar} from "./components/TodoToolbar/TodoToolbar.tsx";
import {TodoList} from "./components/TodoList/TodoList.tsx";
import {useEffect, useState} from "react";
import type {Todo} from "./types.ts";

export function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos")

    if (savedTodos) {
      return JSON.parse(savedTodos)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const [searchValue, setSearchValue] = useState("")

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

  function handleDeleteTodo(id: string) {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  function handleDeleteAllTodos() {
    setTodos([])
  }

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <div className="TodoPage">
      <TodoHeader />
      <AddTodoForm handleAddTodo={handleAddTodo}/>
      <SearchBar
        value={searchValue}
        onChangeSearch={setSearchValue}
      />
      <TodoToolbar
        totalCount={todos.length}
        handleDeleteAllTodos={handleDeleteAllTodos}
      />
      <TodoList
        todos={filteredTodos}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  )
}
