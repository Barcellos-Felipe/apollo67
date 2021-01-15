import React from 'react';
import '../App.css';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="content-container">
        <div className="video-container">
          <video src="./pub-media/video/placeholder-video.mp4" autoPlay loop muted></video>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea nesciunt nobis, necessitatibus, fugiat quaerat cupiditate tempore ut reprehenderit similique doloremque adipisci iusto?.</p>
        </div>
        <div className="title-container">
          <h1 id="portfolio-section">LOREM IPSUM</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas odit mollitia, assumenda qui et officiis.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;