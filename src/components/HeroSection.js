import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection () {
  return (
    <div className="hero-container">
      <img src="./pub-media/img/img-home.jpg" alt="" className="home-img"/>
      <h1 id="hero-section">SELTON BABAQUINHA</h1>
      <p>Quando o assunto é encontrar maneiras de aumentar sua visibilidade no mercado, nós projetamos as melhores estratégias de uma forma divertida e descontraída.</p>
    </div>
  ); 
}

export default HeroSection;