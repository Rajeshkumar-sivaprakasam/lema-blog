import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`auth/register`, register);
      navigate("/login");
    } catch (err) {
      setErr(err.response.data);
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
        {err && <p>{err}</p>}
        <span>
          have an account?&nbsp;<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};
