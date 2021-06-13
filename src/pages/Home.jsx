import { useContext } from "react";
import { AppContext } from "../components/stateprovider";

import Card from "../components/card";

const Home = () => {

  const {state} = useContext(AppContext)
  return (
    <div className="App">
      <div className="todo-list-container">
        {state.todos.map(({todo, title, id, userId}) => (
          <Card key={id} title={title} userId={userId} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Home;
