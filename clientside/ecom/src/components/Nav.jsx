
import React from "react";
import "./Nav.css"
import { Link, useNavigate } from "react-router-dom";

const Nav = ({setName}) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Successfully logged out!");
    location.reload()
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">𝐄-𝐂𝐎𝐌𝐌𝐄𝐑𝐂𝐄</a>
        <p className="b1">ᴮᵉᵃᵘᵗʸ ᵃⁿᵈ ᴳʳᵒᵒᵐⁱⁿᵍ</p>
      </div>

      <div className="nav-center">
        <input
          type="text"
          className="search-input"
          placeholder="search for cosmetics and more..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="nav-links">
        {token ? (
          <>
            <div className="dropdown">
            <button className="profile-icon"></button>
              {/* <button className="dropdown-btn">Account</button> */}
              <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout} className="lod">Logout</button>
              </div>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="log">
            Login</button>
            </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;