import { useContext } from "react";
import { AppContext } from "./stateprovider";
import { Link } from "react-router-dom";

import Styles from "../styles/navbar.module.css";

const Navbar = () => {

  const {state} = useContext(AppContext)
  return (
    <nav className={Styles.navbar}>
      <Link className={Styles.navlink} to="/home">
        Home
      </Link>
      <Link className={Styles.navlink} to="/todos">
        Todos
      </Link>
      {!state.isloggedin ? (
        <>
          <Link className={Styles.navlink} to="/register">
            Register
          </Link>
          <Link className={Styles.navlink} to="/login">
            Login
          </Link>
        </>
      ) : (
        <>
          <Link className={Styles.navlink} to="/addtodo">
            Add Todo
          </Link>
          <Link className={Styles.navlink} to="/login">
            Log Out
          </Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;
