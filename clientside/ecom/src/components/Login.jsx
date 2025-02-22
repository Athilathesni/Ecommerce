

import React, { useState } from "react";
import loginimg from "../assets/login.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before submitting

    try {
      console.log(formData);

      // Sending data to the backend
      const res = await axios.post("http://localhost:3004/api/login", formData);

      console.log(res.data); // Debugging response
      if (res.status === 201) {
        const { token, accType } = res.data; // Assuming acctype indicates 'buyer' or 'seller'
        localStorage.setItem("token", token);

        alert("Successfully logged in!");
        if (accType === "buyer") {
          navigate("/"); // Redirect to the buyer's homepage
        } else if (accType === "seller") {
          navigate("/profile"); // Redirect to the seller's dashboard
        } else {
          alert("Invalid account type!");
        }
      } else {
        // Handle other responses from the backend
        alert(res.data.msg);
      }
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
   <div className="login-container">
       <div className="login-box">
      <div className="login-left">
        <h2 className="h2">𝗟𝗢𝗚𝗜𝗡</h2>
        <p className="sigp">Get access to your Orders, Wishlist, and Recommendations</p>
        <img src={loginimg} alt=""  className="img1"/>
      </div>

        {error && <p className="error-message">{error}</p>} {/* Display error */}

        <div className="login-right">

        <form onSubmit={handleSubmit}>
        <div className="form-group">
              <input
                className="in1"
                type="tel"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="in1"
                type="password1"
                name="pass"
                value={formData.pass}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
             </div>
             <button type="submit" className="btn-login1" onClick={handleSubmit}> Login </button>
        </form>

        <div className="form-footer">
           <Link to={"/verify"} className="forgot-password-link">
             Forgot Password?
           </Link>
         </div>
         <div className="und">
           <Link to={"/verify"} className="signup-link">
             <span className="sp">Don't have an account?</span>
             Sign Up
           </Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Login;