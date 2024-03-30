import React, { useState } from 'react';
import './styles.css';

function NavBar() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav>
            <div className="logo">
                <a href="#"><img src="imgs/LogoBackgroundRemoved.png" alt="COOPELIMSE R.L"/>COOPELIMSE R.L</a>
            </div>
            <div className="toggle" onClick={toggleMenu}>
                <a>{menuActive ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}</a>
            </div>
            <ul className={`menu ${menuActive ? 'active' : ''}`}>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#acerca">Acerca</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
