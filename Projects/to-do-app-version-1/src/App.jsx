import { useState } from "react";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import "./App.css";
import TodoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/Welcome";
function App() {
const initialtodoItem=[{
  
}]
console.log(initialtodoItem);
// const initialtodoItem=[{
//    name:'buy milk',
//    dueDate: "02-12-2024",
// },{
//   name:'go to gym',
//    dueDate: "02-11-2024",
// },{
//    name:"temple",
//    dueDate:"26-02-20245",
// }]
 const [todoItem,settodoItem]=useState([]);

const [todoInput,settodoInput]=useState("");
console.log(todoInput); //working

const handleNewItems=(ItemName, dueDate)=>{
   console.log(`item added ${ItemName}- ${dueDate}`);
   let newItems=[...todoItem,{
    name: ItemName,
    dueDate: dueDate,
   }]
   settodoItem(newItems);

}

return (
    <>
      <center className="todo-container">
        <AppName />
        <AddToDo todoInput={todoInput}
         handleNewItems={handleNewItems}
        /> 
        {
          todoItem.length===0 &&  <WelcomeMessage/>
        }
      
        <TodoItems todoItem={todoItem} settodoItem={settodoItem}/>
      </center>
    </>
  );
}

export default App;
