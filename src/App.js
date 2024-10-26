import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Card from './components/Card';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
     <Home/>
     <About/>
     <Products/>
     <Card/>
     <Review/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;

