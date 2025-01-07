import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Selldet from "./Selldet";
// import Cart from "./Cart";
// import WishList from "./WishList";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("profile");

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    const confirmDelete = window.confirm("Are you sure you want to Logout?");
    if (!confirmDelete) return;
    localStorage.removeItem("token");
    alert("Successfully logged out!");
    navigate("/login");
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <h2>My Account</h2>
        <ul>
          <li onClick={() => handleSectionChange("profile")}>Profile</li>
          <li onClick={() => handleSectionChange("cart")}>Cart</li>
          <li onClick={() => handleSectionChange("wishlist")}>Wishlist</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className="profile-content">
        {activeSection === "profile" && <Selldet />}
        {/* {activeSection === "cart" && <Cart />}
        {activeSection === "wishlist" && <WishList />} */}
      </div>
    </div>
  );
};

export default Profile;