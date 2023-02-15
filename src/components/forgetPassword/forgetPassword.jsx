import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forgetPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // document.cookie = `username=${username}`;
  };

  return (
    <div className="forgetPassword">
      <h1>Forget Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="login_name"
          type="email"
          name="username"
          placeholder="Email"
          required
        />
        <button type="submit">Forget Password</button>
        <Link className="tagA firstLink" to="/">
          Login
        </Link>
        <div className="secondLink">
          <p> Create Account</p>
          <Link className="tagA" to="/signUp">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
