import React, { useEffect, useState } from "react"
import "./Register.css"
import {Link, useNavigate } from "react-router-dom"
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: localStorage.getItem('email') || "",
    Phone:"",
    pwd: "",
    cpwd: "",
  })
  formData.email=localStorage.getItem('email')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formData)
    const res=await axios.post("http://localhost:4000/api/adduser",formData)
      console.log(res)
      if(res.status==201){
        alert(res.data.msg)
        localStorage.removeItem('email')
        navigate('/login')
      }else{
        alert(res.data.msg)
      }
    } catch (error) {
      
    }
  };

  return (
    // <div className="register-page">
    //   <div className="register-container">
    //     <div className="register-header">
    //       <h1>REGISTRATION</h1>
    //     </div>
    //     <form onSubmit={handleSubmit} method="post">
    //       <div className="forms-group">
    //         <input
    //           type="text"
    //           name="username"
    //           value={formData.username}
    //           onChange={handleChange}
    //           placeholder="username"
    //           required
    //         />
    //       </div>
    //       <div className="forms-group">
    //         <input
    //           type="email"
    //           name="email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           placeholder="Email Id"
    //           required
    //         />
    //       </div>
    //       <div className="forms-group">
    //         <input
    //           type="Phone"
    //           name="Phone"
    //           value={formData.Phone}
    //           onChange={handleChange}
    //           placeholder="Phone Number"
    //           required
    //         />
    //       </div>
    //       <div className="forms-group">
    //         <input
    //           type="password"
    //           name="pwd"
    //           value={formData.pwd}
    //           onChange={handleChange}
    //           placeholder=" password"
    //           required
    //         />
    //       </div>
    //       <div className="forms-group">
    //         <input
    //           type="password"
    //           name="cpwd"
    //           value={formData.cpwd}
    //           onChange={handleChange}
    //           placeholder="Confirm password"
    //           required
    //         />
    //       </div>
    //       <div className="con1">
    //       People who use our service may have uploaded your contact information to Instagram.<span className="le2"> Learn More</span>
    //       </div>
    //       <div className="con2">
    //       By signing up, you agree to our <span className="le2"> Terms , Privacy Policy</span> and <span className="le2"> Cookies Policy .</span>
    //       </div>
    //       <button type="submit" className="btn-submit">
    //         Sign up
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="login-container">
    <div className="login-box1">
      <div className="login-left">
        <h2>REGISTRATION</h2>
        <p>Sign up with your data to get started</p>
      </div>
      <div className="login-right">
        
      <form onSubmit={handleSubmit} method="post">
          <div className="forms-group">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="username"
              required
            />
          </div>
          <div className="forms-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Id"
              required
            />
          </div>
          <div className="forms-group">
            <input
              type="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="forms-group">
            <input
              type="password"
              name="pwd"
              value={formData.pwd}
              onChange={handleChange}
              placeholder=" password"
              required
            />
          </div>
          <div className="forms-group">
            <input
              type="password"
              name="cpwd"
              value={formData.cpwd}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="con2">
          By continuing, you agree to Flipkart's  <span className="le2">  Terms of Use</span> and <span className="le2"> Privacy Policy. </span>
          </div>
          <button type="submit" className="btn-submit">
            Sign up
          </button>
          <Link to={"/login"}>
          <button className="btnlog">
            Existing User?Login in
          </button></Link>
        </form>
        </div>
    </div>
  </div>
  )
}

export default Register