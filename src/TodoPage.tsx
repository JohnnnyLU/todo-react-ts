import {TodoHeader} from "./ui/TodoHeader/TodoHeader.tsx";
import {AddTodoForm} from "./ui/AddTodoForm/AddTodoForm.tsx";
import {SearchBar} from "./ui/SearchBar/SearchBar.tsx";
import {TodoToolbar} from "./ui/TodoToolbar/TodoToolbar.tsx";
import {TodoList} from "./ui/TodoList/TodoList.tsx";
import "./normalize.css"
import "./index.css"

export function TodoPage() {


  return (
    <div>
      <TodoHeader />
      <AddTodoForm />
      <SearchBar />
      <TodoToolbar />
      <TodoList />
    </div>
  )
}