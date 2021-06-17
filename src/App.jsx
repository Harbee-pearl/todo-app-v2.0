import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import FourOhFour from "./pages/404";
import Home from "./pages/Home";
// import UserTodos from "./pages/UserTodos";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TodoPage from "./pages/todopage";


import Navbar from "./components/navbar";
import StateProvider from "./components/stateprovider";

function App() {

  return (
    <StateProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/todopage">
            <TodoPage />
          </Route>

          {/* <Route exact path="/usertodos/:userid">
            <UserTodos />
          </Route> */}

          <Route>
            <FourOhFour />
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
};

export default App;
