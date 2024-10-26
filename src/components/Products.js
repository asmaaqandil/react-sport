import React from 'react';
import './Products.css';  
import shert1 from '../assets/t-shert1.png';
import shert2 from '../assets/t-shert2.png';
import shert3 from '../assets/t-shert3.png';
import shert4 from '../assets/t-shert4.png';
import shert5 from '../assets/t-shert5.png';
import shert6 from '../assets/t-shert6.png';

const Products = () => {
  return (
    <div className="tshirts-section" id='products'>
      <h2 className="section-title">T-Shirts Collection</h2>
      <div className="tshirts-grid">
        <div className="product-card">
          <img src={shert1} alt="T-Shirt 1" className="product-image" />
          <h3 className="product-name">Classic T-Shirt</h3>
          <p className="product-price">$25</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shert2} alt="T-Shirt 2" className="product-image" />
          <h3 className="product-name">Sport T-Shirt</h3>
          <p className="product-price">$30</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shert3} alt="T-Shirt 3" className="product-image" />
          <h3 className="product-name">V-Neck T-Shirt</h3>
          <p className="product-price">$28</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shert4} alt="T-Shirt 4" className="product-image" />
          <h3 className="product-name">Graphic T-Shirt</h3>
          <p className="product-price">$22</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shert5} alt="T-Shirt 5" className="product-image" />
          <h3 className="product-name">Cotton T-Shirt</h3>
          <p className="product-price">$27</p>
          <button className="buy-button">Buy Now</button>
        </div>

        <div className="product-card">
          <img src={shert6} alt="T-Shirt 6" className="product-image" />
          <h3 className="product-name">Long Sleeve T-Shirt</h3>
          <p className="product-price">$35</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;

