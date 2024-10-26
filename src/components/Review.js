import React from 'react';
import './Review.css';  
import review1 from '../assets/review1.jpg'
import review2 from '../assets/review2.jfif'
import review3 from '../assets/review3.jfif'
import review4 from '../assets/review4.jpg'
import review5 from '../assets/review5.jpg'

function Review() {
  return (
    <div className="review-section" id='services'>
      <h2 className="section-title2">Customer Reviews</h2>
      
      <div className="reviews-grid">
        <div className="review-card">
          <img src={review1} alt="John Doe" className="review-image" />
          <h3 className="review-name">John Doe</h3>
          <p className="review-text">Great product! High quality and fast shipping.</p>
          <div className="review-rating">★★★★★</div>
        </div>

        <div className="review-card">
          <img src={review2} alt="Jane Smith" className="review-image" />
          <h3 className="review-name">Jane Smith</h3>
          <p className="review-text">I loved the design and comfort. Highly recommended!</p>
          <div className="review-rating">★★★★☆</div>
        </div>

        <div className="review-card">
          <img src= {review3} alt="Alice Johnson" className="review-image" />
          <h3 className="review-name">Alice Johnson</h3>
          <p className="review-text">Good quality but delivery was a bit slow.</p>
          <div className="review-rating">★★★☆☆</div>
        </div>
        <div className="review-card">
          <img src={review4} alt="Alice Johnson" className="review-image" />
          <h3 className="review-name">Mark Johnson</h3>
          <p className="review-text">Good quality but delivery was a bit slow.</p>
          <div className="review-rating">★★★☆☆</div>
        </div>
        <div className="review-card">
          <img src={review5} alt="Alice Johnson" className="review-image" />
          <h3 className="review-name">jak Johnson</h3>
          <p className="review-text">Good quality but delivery was a bit slow.</p>
          <div className="review-rating">★★★☆☆</div>
        </div>
      </div>
    </div>
  );
}

export default Review;
