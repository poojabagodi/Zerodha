import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "../signup/Signup.css"; // reuse same styles

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, credentials, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", credentials.email);

      toast.success("Login successful!");
      navigate(from);
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        {/* 👇 Password with toggle icon */}
        <div className="password-input-container">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <span className="password-toggle" onClick={togglePassword}>
            <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
          </span>
        </div>

        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Signup here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
