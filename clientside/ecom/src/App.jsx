import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Nav from './components/Nav'
import Register from "./components/Register"
import Profile from "./components/Profile"
import Seller from "./components/Seller"
import Addp from "./components/Addp"
import Category from "./components/Category"
import Productde from "./components/Productde"


function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/sellerPage" element={<Seller/>}></Route>
        <Route path="/addProduct" element={<Addp/>}></Route>
        <Route path="/category/:category" element={<Category/>}></Route>
        <Route path="/product/:productId" element={<Productde/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App