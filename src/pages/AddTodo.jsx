import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AppContext } from "../components/stateprovider";

export default function AddTodo() {
  const { register, handleSubmit } = useForm();
  const {state, setState} = useContext(AppContext);

  const createTodo = ({ todo }) => {

        const data = {
            todos:todo,
            userId:state.userId,
            completed:false
        }

        fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(data)
        })  
          .then((res) => res.json())
          .then(result => {
              setState(prevValue => {
                return {  ...prevValue,
                  todos:[
                      result,
                      ...todo
                    ]}
              })
          })

};

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit(createTodo)}>
        <div className="formgroup">
          <input
            id="title-input"
            type="text"
            {...register("todo")}
            placeholder="Write todo here"
          />
        </div>
        <div>
          <button className="form-submit-btn" type="submit">
            Create Todo
          </button>
        </div>
      </form>
    </div>
  );
};
