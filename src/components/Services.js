import React from 'react';
import '../App.css';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h1 id="services-section">O QUE OFERECEMOS?</h1>
      <p>Desde a criação até o resultado final, tratamos cada projeto como algo especial, como um sonho sendo alcançado.</p>

      <div className="items-container">
        <div className="square-wrapper">
          <div className="square-item">
            <img src="./pub-media/img/placeholder-square.png" alt="" className="square-img" />
            <span className="square_txt">Lorem Ipsum</span>
          </div>
          <div className="square-item">
            <img src="./pub-media/img/placeholder-square.png" alt="" className="square-img" />
            <span className="square_txt">Lorem Ipsum</span>
          </div>
          <div className="square-item">
            <img src="./pub-media/img/placeholder-square.png" alt="" className="square-img" />
            <span className="square_txt">Lorem Ipsum</span>
          </div>
        </div>
        <div className="square-wrapper">
          <div className="square-item">
            <img src="./pub-media/img/placeholder-square.png" alt="" className="square-img" />
            <span className="square_txt">Lorem Ipsum</span>
          </div>
          <div className="square-item">
            <img src="./pub-media/img/placeholder-square.png" alt="" className="square-img" />
            <span className="square_txt">Lorem Ipsum</span>
          </div>
          <div className="square-item">
            <img src="./pub-media/img/placeholder-square.png" alt="" className="square-img" />
            <span className="square_txt">Lorem Ipsum</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;