
const TodoItems=()=>{
  let todoName='buy milk';
  let todoDate='24-02-2024';
  return <div class="container">
  <div class="row kg-row">
    <div class="col-4">
      {todoName}
    </div>
    <div class="col-4">
      {todoDate}
    </div>
    <div class="col-2">
      <button type="button" className="btn btn-danger kg-button">
        Delete
      </button>
    </div>
  </div>
  </div>
}
export default TodoItems;