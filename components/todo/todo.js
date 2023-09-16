function ToDo(props) {
  return (
    <div className="todo_item rounded-1 border border-primary bg-light">
      <p className="name_box">Go Shopping</p>
      <div>
        <button
          onClick={() => {
            props.handleClickDeleteBtn();
          }}
          className="btn btn-danger btn-delete"
        >
          <i class="bi bi-trash"></i>
        </button>
        <button
          onClick={() => {
            props.handleClickUpdateBtn();
          }}
          className="btn btn-primary btn-edit"
        >
          <i class="bi bi-pen"></i>
        </button>
      </div>
    </div>
  );
}
export default ToDo;
