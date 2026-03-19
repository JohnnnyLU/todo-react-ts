import {TodoHeader} from "./ui/TodoHeader/TodoHeader.tsx";
import {AddTodoForm} from "./ui/AddTodoForm/AddTodoForm.tsx";
import {SearchBar} from "./ui/SearchBar/SearchBar.tsx";
import {TodoToolbar} from "./ui/TodoToolbar/TodoToolbar.tsx";
import {TodoList} from "./ui/TodoList/TodoList.tsx";
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
