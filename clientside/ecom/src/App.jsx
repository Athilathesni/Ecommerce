import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Nav from './components/Nav'
import Register from "./components/Register"
import VerifyEmail from "./components/VerifyEmail"
import Profile from "./components/Profile"
import SellerPage from "./components/SellerPage"
import AddProduct from "./components/AddProduct"
import CategoryPage from "./components/CategoryPage"
import ProductDetailsPage from "./components/ProductDetailsPage"
import ResetPassword from "./components/ResetPassword"
import { useState } from "react"
import ProductDetails from "./components/ProductDetails"
import Details from "./components/Details"
import Cart from "./components/Cart"
import Myorder from "./components/Myorder"
import Sellore from "./components/Sellore"
import WishList from "./components/WishList"
import Ordersuccess from "./components/Ordersuccess"
function App() {
  const [name,setName]=useState("")
  return (
    <>
      <BrowserRouter>
      <Nav setName={setName}/>
      <Routes>
      <Route path="/" element={<Home name={name}/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/verifyEmail" element={<VerifyEmail/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/sellerPage" element={<SellerPage/>}></Route>
        <Route path="/addProduct" element={<AddProduct/>}></Route>
        <Route path="/category/:category" element={<CategoryPage/>}></Route>
        <Route path="/products/:productId" element={<ProductDetailsPage/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/resetPassword" element={<ResetPassword/>}></Route>
        <Route path="/details/:productId" element={<Details/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/orders" element={<Myorder/>}></Route>
        <Route path="/sellerOrder" element={<Sellore/>}></Route>
        <Route path="/wishlist" element={<WishList/>}></Route>
        <Route path="/success" element={<Ordersuccess />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App