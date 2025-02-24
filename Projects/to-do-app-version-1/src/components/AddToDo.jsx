
const AddToDo=()=>{
  return(
    <div>
      <div class="container">
          <div class="row kg-row">
            <div class="col-4">
              <input type="text" placeholder="enter todo here" />
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
              <button type="button" className="btn btn-success kg-button">
                Add
              </button>
            </div>
          </div>
          </div>
    </div>
  )
}
export default AddToDo;