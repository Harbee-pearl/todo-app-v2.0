import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./stateprovider";

import "../styles/cardlist.css";

const Card = ({ title, userId, id, todo, todos }) => {

  const { state } = useContext(AppContext);
  // This function handles the completed checkbox and sets completed to true
  function CheckboxHandler() {

      state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        console.log(item);
        return item;
      })
  }
  // This function edits the text in the todos array
  //   function EditHandler() {
  //     setInputText(text);
  //   }

  // This removes the item that is clicked
  function DeleteHandler() {
    
   todos.filter((item) => item.id !== todo.id);
  }
  return (
    <div className="card grid-4-layout">
      <p className="card-title">{title}</p>
      <Link to={`/usertodos/${userId}`}>List by: {userId}</Link>
      <input
        className="complete-btn"
        type="checkbox"
        onClick={CheckboxHandler}
      />
      <input
        className="item-btn"
        type="submit"
        value="Edit"
        //   onClick={EditHandler}
      />
      <input
        className="item-btn"
        type="submit"
        value="Delete"
        onClick={DeleteHandler}
      />
    </div>
  );
};

export default Card;
