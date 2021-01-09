import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection () {
  return (
    <div className="hero-container">
      <img src="./pub-media/img/img-home.jpg" alt="" className="home-img"/>
      <h1>LOREM IPSUM DOLOR SIT AMET CONSECTETUR.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sunt, exercitationem, fugit nam magnam iure excepturi molestiae voluptatem debitis neque ipsam.</p>
    </div>
  ); 
}

export default HeroSection;