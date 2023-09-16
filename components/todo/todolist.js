import "./style.css";
import ToDo from "./todo";
import { useState } from "react";

const dataToDoList = [
  {
    id: 1,
    name: "go shopping",
    status: "new",
  },
  {
    id: 2,
    name: "go swimming",
    status: "new",
  },
  {
    id: 3,
    name: "go fishing",
    status: "new",
  },
];

function ToDoList() {
  const [showModelCreate, setModelCreate] = useState(false);
  const [showModelDelete, setModelDelete] = useState(false);
  const [showModelUpdate, setModelUpdate] = useState(false);
  const [showOverlay, setOverlay] = useState(false);

  function handleClickDeleteBtn(showDelete) {
    setModelDelete(true);
    setOverlay(true);
  }
  function handleClickUpdateBtn(showUpdate) {
    setModelUpdate(true);
    setOverlay(true);
  }

  return (
    <>
      <div className="todolist_wrapper">
        <p className="h1 text-danger">TO DO</p>
        <div className="search_list">
          <input
            placeholder="Input search key"
            className="form-control"
          ></input>
          <button
            onClick={() => {
              setModelCreate(true);
              setOverlay(true);
            }}
            className="btn btn-primary"
          >
            Create
          </button>
        </div>
        <div className="btns">
          <button className="btn btn-outline-success btn-light">All</button>
          <button className="btn btn-outline-success btn-light">Done</button>
          <button className="btn btn-outline-success btn-light">
            In-progress
          </button>
        </div>
        <div>
          <ToDo
            handleClickDeleteBtn={handleClickDeleteBtn}
            handleClickUpdateBtn={handleClickUpdateBtn}
          />
        </div>
      </div>
      <div
        className={
          showModelCreate ? "model_create-box show" : "model_create-box hidden"
        }
      >
        <p className="h5 heading">Create new todo</p>
        <input placeholder="Enter todo" className="form-control"></input>
        <span></span>
        <div className="display">
          <button className="btn btn-primary">Create</button>
          <button
            onClick={() => {
              setModelCreate(false);
              setOverlay(false);
            }}
            className="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
      <div
        className={
          showModelDelete ? "model_delete-box show" : "model_delete-box hidden"
        }
      >
        <p className="h5 heading">Delete this todo</p>
        <p>Are you sure you want to delete this ?</p>
        <div className="display">
          <button className="btn btn-danger">Delete</button>
          <button
            onClick={() => {
              setModelDelete(false);
              setOverlay(false);
            }}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
      <div
        className={
          showModelUpdate ? "model_update-box show" : "model_update-box hidden"
        }
      >
        <p className="h5 heading">Update todo</p>
        <input className="form-control"></input>
        <div className="display">
          <button className="btn btn-primary">Save</button>
          <button
            onClick={() => {
              setModelUpdate(false);
              setOverlay(false);
            }}
            className="btn btn-secondary"
          >
            Close
          </button>
        </div>
      </div>
      <div className={showOverlay ? "overlay show" : "overlay hidden"}></div>
    </>
    // hhhh
  );
}
export default ToDoList;
