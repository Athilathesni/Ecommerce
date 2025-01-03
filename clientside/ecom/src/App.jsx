import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  
  return (
    <>
      <BrowserRouter>
       <Nav/>
        <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App