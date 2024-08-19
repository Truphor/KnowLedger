import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userType, setUserType] = useState("learner");

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`${userType} logged in`);
  };

  return (
    <div className="blurred-background">
      <div className="login-container">
        <div className="login-tabs">
          <button
            className={userType === "learner" ? "active" : ""}
            onClick={() => handleUserTypeChange("learner")}
          >
            Learner Login
          </button>
          <button
            className={userType === "creator" ? "active" : ""}
            onClick={() => handleUserTypeChange("creator")}
          >
            Course Creator Login
          </button>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <h2>{userType === "learner" ? "Learner" : "Course Creator"} Login</h2>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
