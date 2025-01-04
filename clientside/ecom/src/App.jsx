import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/Home";

function App() {
  const [user, setUser] = useState("")
  return (
    <>
      <BrowserRouter>
       <Nav/>
        <Routes>
        <Route path="/" element={<HomePage setUser={setUser}/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App