// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">CSGO LUCK</div>
            <nav>
                <Link to="/signin">Zaloguj się</Link>
                <Link to="/signup">Zarejestruj się</Link>
            </nav>
        </header>
    );
};

export default Header;
