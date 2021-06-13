import "../styles/login.css";

import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AppContext } from "../components/stateprovider";
import { useContext } from "react";

export default function Login() {

  const {setState} = useContext(AppContext)
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const login = ({ email, password }) => {
    const user = localStorage.getItem(email);
    if (!user) {
      return alert("This email is not registered with us");
    }
  
    const userdata = JSON.parse(user);
    if (password !== userdata.password) {
      return alert("Email or password incorrect");
    }
    alert('Login successful')

   setState(prevValue => {
      return {
        ...prevValue,
        isloggedin:true,
        userEmail: userdata.email,
        userId: userdata.userId
      };
    });
  
  history.push("/home");
  };
  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit(login)}>
          <div className="input-container c1">
            <input
              id="email"
              className="input"
              type="text"
              required
              {...register("email")}
              placeholder=" "
            />

            <div className="cut" />
            <label htmlFor="Email" className="placeholder">
              Email
            </label>
          </div>
          <div className="input-container c2">
            <input
              id="password"
              className="input"
              type="password"
              required
              {...register("password")}
              placeholder=" "
            />
            <div className="cut" />
            <label htmlFor="Password" className="placeholder">
              Password
            </label>
          </div>

          <button type="submit" className="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

