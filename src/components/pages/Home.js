import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Services from '../Services';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;