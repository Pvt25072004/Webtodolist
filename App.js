import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDoList from "./components/todo/todolist";
function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
/* <Item title="Cau truc du lieu HTML" content="Noi dung" des="Mo ta"/>
      <Item title="Cau truc du lieu JS" content="Noi dung" des="Mo ta"/>
      <Item title="Cau truc du lieu REACT" content="Noi dung" des="Mo ta"/>
      <Item title="Cau truc du lieu CSS" content="Noi dung" des="Mo ta"/> */
