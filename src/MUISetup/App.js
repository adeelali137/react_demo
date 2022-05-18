import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import Contact from "./Contact";
import Home from "./Home";
import LoginReg from "./LoginReg";
import Navbar from "./Navbar";
import Error from './Error'
import Protected from "./Protected";

export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Protected Component={Home}/>}/>
        <Route path="/about" element={<Protected Component={About}/>}>
          <Route path="about1" element={<About1/>}/>
          <Route path="about2" element={<About2/>}/>
          <Route path="about3" element={<About3/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<LoginReg/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    </>
  );
}
