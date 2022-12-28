import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-item">
        <Link to="about">About</Link>
      </div>
      <div className="navbar-item">
        <Link to="/work">Work</Link>
      </div>
      <div className="navbar-item">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
