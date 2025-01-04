
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

// import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { BsSearch, BsPersonCircle } from "react-icons/bs"
// import "./Nav.css"

// const Nav = ({user}) => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false)
//   const navigate = useNavigate()

//   const toggleDropdown = (event) => {
//     event.stopPropagation()
//     setIsDropdownVisible((prevState) => !prevState)
//   }

//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (!event.target.closest(".dropdown")) {
//         setIsDropdownVisible(false)
//       }
//     }

//     window.addEventListener("click", handleOutsideClick)
//     return () => {
//       window.removeEventListener("click", handleOutsideClick)
//     }
//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem("token")
//     alert("Logout Successfully")
//     navigate("/login")
//   }

//   return (
// <nav className="navbar">
// <div className="navbar-brand">
//        <a href="/" className="logo">𝐄-𝐂𝐎𝐌𝐌𝐄𝐑𝐂𝐄</a>
//        <p className="b1">ᴮᵉᵃᵘᵗʸ ᵃⁿᵈ ᴳʳᵒᵒᵐⁱⁿᵍ</p>
//      </div>
//      <div className="navbar-menu">
//        {/* Search Bar */}
//        <form className="search-form">
//          <input
//            type="text"
//            placeholder="Search..."
//            className="search-input"
//          />
//          <button type="submit" className="search-btn">
//            <BsSearch />
//          </button>
//         </form>
     
//       <div className="right">
//          <span className="username">{user}</span> 
//         <div onClick={toggleDropdown} style={{height:"30px",width:"30px",backgroundColor:"white",borderRadius:"50%"}}> 
//         <div className="dropdown">
//         {isDropdownVisible && (
//             <div className="dropcontent">
//               <a href="/profile">Profile</a><br/>
//               <a className="logout" href="/login" onClick={handleLogout} style={{ cursor: "pointer"}}>
//                 Logout
//               </a>
//             </div>
//             <div className="profile-dropdown">
//            <BsPersonCircle size={24} className="profile-icon" />
//          <div className="dropdown-menu">
//            <a href="/profile">Profile</a>
//            <a onClick={handleLogout}>Logout</a>
//          </div>
//        </div>
//           )}
//         </div>
//         </div>
//       </div> 
//       </div>
//       </nav>
    
//   )
// }

// export default Nav