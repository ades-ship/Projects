import { MdOutlineDelete } from "react-icons/md";
const TodoItem=({todoName,todoDate,handleDeleteItem})=>{
  return <div className="container">
  <div className="row kg-row">
    <div className="col-4">
      {todoName} 
    </div>
    <div className="col-4">
      {todoDate}
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-danger kg-button" onClick={()=>handleDeleteItem(todoName)}>
        <MdOutlineDelete/>
      </button>
    </div>
  </div>
  </div>
}
export default TodoItem;