import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const menuItems = ['Home', 'Create', 'Services', 'About', 'Contact'];
    const [active, setActive] = useState(menuItems[0]);

    return (
        <nav className="navbar">
            <ul>
                <li className={active === menuItems[0] ? 'active' : ''} onClick={() => setActive(menuItems[0])}>
                    <a href="#home">{menuItems[0]}</a>
                </li>
                <li className={active === menuItems[1] ? 'active' : ''} onClick={() => setActive(menuItems[1])}>
                    <a href="#about">{menuItems[1]}</a>
                </li>
                <li className={active === menuItems[2] ? 'active' : ''} onClick={() => setActive(menuItems[2])}>
                    <a href="#services">{menuItems[2]}</a>
                </li>
                <li className={active === menuItems[3] ? 'active' : ''} onClick={() => setActive(menuItems[3])}>
                    <a href="#portfolio">{menuItems[3]}</a>
                </li>
                <li className={active === menuItems[4] ? 'active' : ''} onClick={() => setActive(menuItems[4])}>
                    <a href="#contact">{menuItems[4]}</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;