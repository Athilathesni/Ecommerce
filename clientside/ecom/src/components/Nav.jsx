
// import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
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
//       <div>
//         <img src="insta.webp" alt="" />
//       </div>
//       <div className="right">
//         <span className="username">{user}</span>
//         <div onClick={toggleDropdown} style={{height:"30px",width:"30px",backgroundColor:"white",borderRadius:"50%"}}>
//         <div className="dropdown">
//         {isDropdownVisible && (
//             <div className="dropcontent">
//               <a href="/profile">Profile</a><br/>
//               <a className="logout" href="/login" onClick={handleLogout} style={{ cursor: "pointer"}}>
//                 Logout
//               </a>
//             </div>
//           )}
//         </div>
//         </div>
//       </div> 
//       </nav>
    
//   )
// }

// export default Nav



// import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { FaSearch } from 'react-icons/fa';  // Importing the search icon from react-icons
// import "./Nav.css"

// const Nav = ({ user }) => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')  // State for search query
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

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value)
//   }

//   const handleSearchSubmit = (event) => {
//     event.preventDefault()
//     // Handle search functionality here, like making an API call or filtering results
//     console.log("Searching for:", searchQuery)
//     // You could also navigate to a search results page, e.g.
//     // navigate(`/search?q=${searchQuery}`)
//   }

//   return (
//     <nav className="navbar">
//       <div>
//         <img src="insta.webp" alt="" />
//       </div>
//       <div className="navbar-center">
//         {/* Search Bar */}
//         <form onSubmit={handleSearchSubmit} className="search-form">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="search-input"
//           />
//           <button type="submit" className="search-button">
//             <FaSearch />
//           </button>
//         </form>
//       </div>
//       <div className="right">
//         <span className="username">{user}</span>
//         <div onClick={toggleDropdown} style={{ height: "30px", width: "30px", backgroundColor: "white", borderRadius: "50%" }}>
//           <div className="dropdown">
//             {isDropdownVisible && (
//               <div className="dropcontent">
//                 <a href="/profile">Profile</a><br />
//                 <a className="logout" href="/login" onClick={handleLogout} style={{ cursor: "pointer" }}>
//                   Logout
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Nav

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
        <a href="/" className="logo">MyApp</a>
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
        <button className="login-btn">Login</button>

        {/* Profile Dropdown */}
        <div className="profile-dropdown">
          <BsPersonCircle size={24} className="profile-icon" />
          <div className="dropdown-menu">
            <a href="/profile">Profile</a>
            <a href="/settings">Settings</a>
            <a href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
