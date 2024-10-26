import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        GameOn
        <i className="fa fa-futbol-o" style={{ marginRight: '8px' }}></i>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="bars">
        <i className="fa fa-bars"></i>
      </label>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="social-icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#cart"><i className="fa fa-shopping-cart"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;



