import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AppContext } from "../components/stateprovider";

import "../styles/home.css";

function Home() {
  return (
    <div className="app">
      <h1 id="home-title">Welcome to My TodoList App</h1>
      <p>
        <Link to="/login">Click here to Login</Link>
          /
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Home;
