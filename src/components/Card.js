import React from 'react';
import './Card.css'; 
import shoe1 from '../assets/shoe1.png';
import shoe2 from '../assets/shoe2.png';
import shoe3 from '../assets/shoe3.png';
import shoe4 from '../assets/shoe4.png';
import shoe5 from '../assets/shoe5.png';
import shoe6 from '../assets/shoe6.png';

const Card = () => {
  return (
    <div className="shoes-section">
      <h2 className="section-title">Shoes Collection</h2>
      <div className="shoes-grid">
        <div className="product-card">
          <img src={shoe1} alt="Shoe 1" className="product-image" />
          <h3 className="product-name">Running Shoes</h3>
          <p className="product-price">$50</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shoe2} alt="Shoe 2" className="product-image" />
          <h3 className="product-name">Basketball Shoes</h3>
          <p className="product-price">$70</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shoe3} alt="Shoe 3" className="product-image" />
          <h3 className="product-name">Tennis Shoes</h3>
          <p className="product-price">$65</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shoe4} alt="Shoe 4" className="product-image" />
          <h3 className="product-name">Soccer Shoes</h3>
          <p className="product-price">$55</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shoe5} alt="Shoe 5" className="product-image" />
          <h3 className="product-name">Casual Shoes</h3>
          <p className="product-price">$45</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shoe6} alt="Shoe 6" className="product-image" />
          <h3 className="product-name">Training Shoes</h3>
          <p className="product-price">$60</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;


