import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Services from '../Services';
import Portfolio from '../Portfolio';

function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Portfolio />
    </>
  );
}

export default Home;