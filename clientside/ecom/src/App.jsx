import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import "./App.css"
import Nav from "./components/Nav";

function App() {
  
  return (
    <>
      <BrowserRouter>
       <Nav/>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App