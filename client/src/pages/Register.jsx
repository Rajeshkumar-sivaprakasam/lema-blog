import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import baseURL from "../config.js";

export const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`auth/register`, register);
      console.log(res, "response");
    } catch (err) {
      console.log("Error Occured!", err);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={hanldeSubmit}>Register</button>
        <p>This is an error!</p>
        <span>
          Don't have an account?&nbsp;<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};
