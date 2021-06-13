import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import { AppContext } from "../components/stateprovider";

import "../styles/register.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { setState} = useContext(AppContext);

  const history = useHistory();

  const registerUser = ({ email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      return alert("The password entered does not match");
    }

    // This searches the local storage for the email and does not register if the email already exists
    let userfound = localStorage.getItem(email);
    if (userfound) {
      return alert("This email has been registered before");
    }
    // creates a new user object and saves it to local storage
    const newuser = {
      email: email,
      password: password,
      userId: Date.now(),
    };
    localStorage.setItem(email, JSON.stringify(newuser));
    alert("Registration successful");

    setState(prevValue => {
      return {
        ...prevValue,
        isloggedin:true,
        userEmail: newuser.email,
        userId: newuser.userId
      };
    });

    history.push("/home");
  };

  return (
    <div className="register-form-container">
      <div className="form">
        <div className="register-title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <form onSubmit={handleSubmit(registerUser)}>
          <div className="input-container ic1">
            <input
              id="email"
              className="input"
              type="text"
              {...register("email", { required: true })}
              placeholder=" "
            />

            <div className="cut" />
            <label htmlFor="Email" className="placeholder">
              Email
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="password"
              className="input"
              type="password"
              {...register("password", { required: true })}
              placeholder=" "
            />
            <div className="cut" />
            <label htmlFor="Password" className="placeholder">
              Password
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="confirm-password"
              className="input"
              type="password"
              {...register("confirmPassword", { required: true })}
              placeholder=" "
            />
            <div className="cut" />
            <label htmlFor="Password" className="placeholder">
              Confirm Password
            </label>
          </div>
          <button type="submit" className="submit">
            Sign Up
          </button>
        </form>
        <a className="login-link" href="/login">
          I already have an account
        </a>
      </div>
    </div>
  );
};

export default Register;
