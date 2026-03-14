import {TodoHeader} from "./ui/TodoHeader.tsx";
import {AddTodoForm} from "./ui/AddTodoForm.tsx";
import {SearchBar} from "./ui/SearchBar.tsx";
import {TodoToolbar} from "./ui/TodoToolbar.tsx";
import {TodoList} from "./ui/TodoList.tsx";

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