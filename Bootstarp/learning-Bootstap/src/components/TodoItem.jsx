function TodoItem() {
  let todoName = "Buy Milk";
  let todoDate = "4/05/2024";
  return (
    <>
      <div className="container">
        {/* <div className="row.space"> */}
        <div className="row">
          <div className="col-6">{todoName}</div>
          <div className="col-4"> {todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default TodoItem;
