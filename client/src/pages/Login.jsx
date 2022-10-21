import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user);
      navigate("/");
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
        <button onClick={hanldeSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't have an account?&nbsp;<Link to="/login">Register</Link>
        </span>
      </form>
    </div>
  );
};
