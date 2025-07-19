import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, user, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });

      alert("Signup successful! Please log in.");
      navigate("/login");
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Signup failed:", message);

      if (message === "User already exists") {
        alert("User already exists! Please login.");
        navigate("/login");
      } else {
        alert("Signup failed: " + message);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h2>Signup</h2>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <div className="password-input-container">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <i
            className={`password-toggle ${showPassword ? "fa fa-eye-slash" : "fa fa-eye"}`}
            onClick={togglePasswordVisibility}
          />
        </div>
        <button type="submit">Signup</button>
        <p className="login-redirect">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
