import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </Router> 
  );
}

export default App;