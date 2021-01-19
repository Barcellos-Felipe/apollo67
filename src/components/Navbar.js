import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return ( 
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/pub-media/img/logo.png" alt=""/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='#hero-section' className='nav-links' onClick={closeMobileMenu}>
                Início
              </a>
            </li>
            <li className='nav-item'>
              <a href='#services-section' className='nav-links' onClick={closeMobileMenu}>
                Serviços
              </a>
            </li>
            <li className='nav-item'>
              <a href='#portfolio-section' className='nav-links' onClick={closeMobileMenu}>
                Portfólio
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact-section' className='nav-links-mobile' onClick={closeMobileMenu}>
                CONTATO
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTATO</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
