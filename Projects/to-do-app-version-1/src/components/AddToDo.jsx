import { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";


// const AddToDo=({handleNewItems})=>{
//   const [itemName,setitemName]=useState("");
//   const [dueDate,setdueDate]=useState("");
//   const handleItemName=(event)=>{
//       console.log(event.target.value);
//       setitemName(event.target.value);
//   }

//   const handleDueDate=(event)=>{
//     console.log(event.target.value);
//     setdueDate(event.target.value);
//   }

//   const handleAddButton=(event)=>{
//     event.preventDefault();
//     console.log("clicked");
//     handleNewItems(itemName,dueDate);
//     setdueDate("");
//     setitemName("");
//   }
//   return(
//     <div>
//       <div className="container">
//           <form onSubmit={handleAddButton} className="row kg-row">
//             <div className="col-4">
//               <input type="text" placeholder="enter todo here" value={itemName} onChange={handleItemName} />
//             </div>
//             <div className="col-4">
//               <input type="date" value={dueDate} onChange={handleDueDate} />
//             </div>
//             <div className="col-2">
//               <button type="button" className="btn btn-success kg-button" 
//               onClick={handleAddButton}
//               >
//                 <IoMdAdd/>
//               </button>
//             </div>
//           </form>
//           </div>
//     </div>
//   )
// }
// export default AddToDo;


// new hook : useRef()  : ->   it is used to avoid or prevent the rendering of the component based on where it is used in the component like may be in jsx part.

// const AddToDo=({handleNewItems})=>{
//   const itemNameElement=useRef();
//   const dueDateElement=useRef();

//   const handleAddButton=(event)=>{
//     console.log(event)
//     event.preventDefault();
//     console.log("clicked");
//     let itemName="";
//     itemName=itemNameElement.current.value;
//     const dueDate=dueDateElement.current.value;
//     dueDateElement.current.value="";
//     itemNameElement.current.value="";
//     handleNewItems(itemName,dueDate);
    
//   }
//   return(
//     <div>
//       <div className="container">
//           <form onSubmit={handleAddButton} className="row kg-row">
//             <div className="col-4">
//               <input type="text" placeholder="enter todo here"
//               ref={itemNameElement}
//               />
//             </div>
//             <div className="col-4">
//               <input type="date"
//               ref={dueDateElement}
//               />
//             </div>
//             <div className="col-2">
//               <button type="button" className="btn btn-success kg-button" 
//               onClick={handleAddButton}
//               >
//                 <IoMdAdd/>
//               </button>
//             </div>
//           </form>
//           </div>
//     </div>
//   )
// }
// export default AddToDo;


// updating previous state using spread operator and functioning.

const handleNewItems=(itemName,dueDate)=>{
    setTodoItems((currentState)=> [
      ...currentState, {
        itemName:itemName,
        dueDate: dueDate
      }
    ])
}

const AddToDo=({handleNewItems})=>{
  const itemNameElement=useRef();
  const dueDateElement=useRef();

  const handleAddButton=(event)=>{
    console.log(event)
    event.preventDefault();
    console.log("clicked");
    let itemName="";
    itemName=itemNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    dueDateElement.current.value="";
    itemNameElement.current.value="";
    handleNewItems(itemName,dueDate);
    
  }
  return(
    <div>
      <div className="container">
          <form onSubmit={handleAddButton} className="row kg-row">
            <div className="col-4">
              <input type="text" placeholder="enter todo here"
              ref={itemNameElement}
              />
            </div>
            <div className="col-4">
              <input type="date"
              ref={dueDateElement}
              />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success kg-button" 
              onClick={handleAddButton}
              >
                <IoMdAdd/>
              </button>
            </div>
          </form>
          </div>
    </div>
  )
}
export default AddToDo;