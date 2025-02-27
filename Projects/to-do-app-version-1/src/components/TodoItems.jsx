import { useState } from "react";
import TodoItem from "./TodoItem";
const ToDoItems = ({ todoItem, settodoItem }) => {
  // const [deleteItem,setdeleteItem]=useState(false);

  const handleDeleteItem=(itemName)=>{
    const newItem=todoItem.filter(item=> item.name !== itemName);
   
    settodoItem(newItem);
  }
  console.log(todoItem);
  return ( 
    <div>
      {todoItem.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          // deleteItem={deleteArray.includes(item.name)}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
};
export default ToDoItems;