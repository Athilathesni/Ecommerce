
import React, { useState } from "react";
import { BsSearch, BsPersonCircle } from "react-icons/bs";  // React icons for search and profile
import "./Nav.css"

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert("Search submitted: " + searchQuery); // Example alert
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <a href="/" className="logo">𝐄-𝐂𝐎𝐌𝐌𝐄𝐑𝐂𝐄</a>
        <p className="b1">ᴮᵉᵃᵘᵗʸ ᵃⁿᵈ ᴳʳᵒᵒᵐⁱⁿᵍ</p>
      </div>

      <div className="navbar-menu">
        {/* Search Bar */}
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <BsSearch />
          </button>
        </form>

        {/* Login Button */}
        <button className="login-btn"><a href="/login">Login</a></button>

        {/* Profile Dropdown */}
        <div className="profile-dropdown">
          <BsPersonCircle size={24} className="profile-icon" />
          <div className="dropdown-menu">
            <a href="/profile">Profile</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
