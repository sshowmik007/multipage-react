import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Skills from "./Skills";
import Work from "./Work";
import Login from "./Login";
import Navbar from "./Navbar";

const AppRoute = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
