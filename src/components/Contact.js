import React from 'react';
import './Contact.css'; 
import neymarImage from '../assets/neymarImage.png';
import salahImage from '../assets/salahImage.png' ;

const Contact = () => {
  return (
    <div className="contact-section" id='contact'>
      <div className="image-container">
        <img src={neymarImage} alt="Neymar" className="player-image" />
      </div>

      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="image-container">
        <img src={salahImage} alt="Mohamed Salah" className="player-image" />
      </div>
    </div>
  );
};

export default Contact;
