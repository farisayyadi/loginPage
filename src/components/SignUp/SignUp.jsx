import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    document.cookie = `username=${username}`;
  };

  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          id="login_name"
          type="text"
          name="username"
          placeholder="UserName"
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        <button type="submit">Sign Up</button>
        <div className="secondLink">
          <p>Already have account</p>
          <Link className="tagA " to="/">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
