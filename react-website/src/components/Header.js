// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    const toggleIcon = document.querySelector('.toggle ion-icon');
    if (menu.classList.contains('active')) {
      toggleIcon.setAttribute('name', 'close-outline');
    } else {
      toggleIcon.setAttribute('name', 'menu-outline');
    }
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src="../assets/imgs/imgs.coopelimse/LogoBackgroundRemoved.png" alt="COOPELIMSE R.L" />COOPELIMSE R.L</Link>
      </div>
      <div className="toggle" onClick={toggleMenu}>
        <a><ion-icon name="menu-outline"></ion-icon></a>
      </div>
      <ul className="menu">
        <li><Link to="/" className="active">Inicio</Link></li>
        <li><Link to="/acerca" className="active">Acerca</Link></li>
        <li><Link to="/servicios" className="active">Servicios</Link></li>
        <li><Link to="/contacto" className="active">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
