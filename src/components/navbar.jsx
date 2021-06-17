import { useContext } from "react";
import { AppContext } from "./stateprovider";
import { Link } from "react-router-dom";

import Styles from "../styles/navbar.module.css";

function Navbar() {

  const context = useContext(AppContext);

  function logOut(){
    context.dispatch({
      type: "LOGOUT",
    });

  }

  return (
    <nav className={Styles.navbar}>
      <Link className={Styles.navlink} to="/home">
        Home
      </Link>
      {context.state.isUserloggedin ? (
        <>
          <Link className={Styles.navlink} to="/todopage">
            Todo Page
          </Link>
          <span className={Styles.navlink} onClick={logOut}>
            Log Out
          </span>
        </>
      ) : (
        <>
          <Link className={Styles.navlink} to="/register">
            Register
          </Link>
          <Link className={Styles.navlink} to="/login">
            Login
          </Link>
        </>
      )}
    </nav>
  );
};
export default Navbar;
