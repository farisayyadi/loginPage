import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
//import SetCookie from "../cookies/setCookie";
//import GetCookie from "../cookies/getCookie";
//import RemoveCookie from "../cookies/removeCookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    document.cookie = `username=${username}`;
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          id="login_name"
          type="email"
          name="username"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="login_name"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        <Link to="/forgetPassword" className="tagA firstLink">
          Forget Your Password
        </Link>
        <div className="secondLink">
          <p>Not registered?</p>
          <Link to="/signUp" className="tagA">
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
