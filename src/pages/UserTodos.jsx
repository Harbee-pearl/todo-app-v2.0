import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Card from "../components/card";

const UserTodos = () => {
  const [userTodos, setUserTodos] = useState([]);
  const params = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.userid}`)
      .then((response) => response.json())
      .then((result) => {
        setUserTodos(result);
      });
  }, [params]);

  return (
    <div>
      {userTodos.map(({ title, userId, id, completed }) => (
        <Card key={id} title={title} userId={userId} completed={completed}  />
      ))}
    </div>
  );
};

export default UserTodos;
