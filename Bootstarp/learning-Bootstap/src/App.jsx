import "./App.css";
import TodoName from "./components/TodoName";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import "./App.css"

function App() {
  return (
    <div className="todo-container">
      <div className="todoApp-container">
        <TodoName />
        <TodoList />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
