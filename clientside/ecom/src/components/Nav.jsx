import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Nav = ({ setName }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [acctype, setAcctype] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const storedAcctype = localStorage.getItem("acctype");
    setAcctype(storedAcctype);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("acctype"); 
    alert("Successfully logged out!");
    location.reload();
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
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
        {acctype && <p className="account-type">Account Type: {acctype}</p>}
    <div className="ic">
        <Link to="/wishlist" className="wishlist-icon">
          <FaHeart size={20} title="Wishlist" />
        </Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={20} title="Cart" />
        </Link>
        </div>

        {token ? (
          <div className="dropdown">
            <button className="profile-icon" onClick={toggleDropdown}>
            </button>
            {dropdownVisible && (
              <div className="dropdown-content">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout} className="lod">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="log">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
