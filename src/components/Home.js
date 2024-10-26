
import React from 'react';
import './Home.css'; 
import sport from '../assets/sport.png'

function Home() {
  return (
    <div className="home-container">
     
      <div className="text-container">
        <h1>Welcome to GameOn!</h1>
        <p>
          Enjoy the best sports products <br/>
           from t-shirts and athletic shoes.
         
        </p>
        <div className="button-container">
          <button className="btn">Shop Now</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="image-container">
        <img src={sport}  alt='sport'/>
      </div>
    </div>
  );
}

export default Home;
