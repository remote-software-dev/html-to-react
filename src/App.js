import React from 'react';
import './App.css';

import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Slider from './components/Slider';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Bottom from './components/Bottom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Advantages/>
      <Slider/>
      <Features/>
      <Reviews/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
