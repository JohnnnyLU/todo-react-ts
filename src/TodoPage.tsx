import {TodoHeader} from "./components/TodoHeader/TodoHeader.tsx";
import {AddTodoForm} from "./components/AddTodoForm/AddTodoForm.tsx";
import {SearchBar} from "./components/SearchBar/SearchBar.tsx";
import {TodoToolbar} from "./components/TodoToolbar/TodoToolbar.tsx";
import {TodoList} from "./components/TodoList/TodoList.tsx";
import {useTodos} from "./bll/useTodos.ts";

export function TodoPage() {

  const {
    filteredTodos,
    searchValue,
    setSearchValue,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleDeleteAllTodos,
  } = useTodos()

  return (
    <div className="TodoPage">
      <TodoHeader />
      <AddTodoForm handleAddTodo={handleAddTodo}/>
      <SearchBar
        value={searchValue}
        onChangeSearch={setSearchValue}
      />
      <TodoToolbar
        totalCount={filteredTodos.length}
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
