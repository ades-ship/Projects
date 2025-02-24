import { useState } from "react";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <center class="todo-container">
        <AppName />
        <AddToDo />
        <div className="item-container">
        <TodoItems />
        <TodoItems/>
        </div>
       
      </center>
    </>
  );
}

export default App;
