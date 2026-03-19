import {useEffect, useState} from "react";
import type {Todo} from "../types.ts";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos")

    if (savedTodos) {
      try {
        return JSON.parse(savedTodos)
      }catch {
        return []
      }
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



  return {
    filteredTodos,
    searchValue,
    setSearchValue,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleDeleteAllTodos,
  }
}