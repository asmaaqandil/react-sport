import React from 'react';
import './About.css';
import sport2 from '../assets/sport2.png'; // تأكد من صحة المسار

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <img src={sport2} alt="Lionel Messi" className="messi-image" />
        <div className="text-content">
          <h2>About Us</h2>
          <p>
            At GameOn, we are dedicated to providing high-quality sports products at affordable prices.
            Our mission is to cater to all sports enthusiasts by offering a wide range of athletic gear 
            and apparel to elevate your game.
          </p>
          <div className="details">
            <div className="detail-item">
              <h4>Established</h4>
              <p>2024</p>
            </div>
            <div className="detail-item">
              <h4>Location</h4>
              <p>Global Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;







