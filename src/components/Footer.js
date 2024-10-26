import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo-section">
          <h2>GameOn</h2>
          <img src={logo} alt='logo' className='logo-footer'/>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="social-media">
          <h4>Follow Us</h4>
          <a href="#" >
            <i className="fa fa-facebook"></i> Facebook
          </a>
          <a href="#" >
            <i className="fa fa-twitter"></i> Twitter
          </a>
          <a href="#" >
            <i className="fa fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 GameOn.<span>Asmaa Qandil</span> All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;



