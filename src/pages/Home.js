// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>OTWIERAJ NAJNOWSZE I NAJRZADSZE SKINY CSGO</h1>
            <p>3 DARMOWE CASEY + 100% DO 100 MONET NA REJESTRACJI</p>
            <Link to="/signup" className="btn">ZAREJESTRUJ SIĘ I WYGRAJ</Link>
            <Link to="/signin" className="btn">ZALOGUJ SIĘ</Link>
            <div className="games">
                <Link to="/crash">Crash</Link>
                <Link to="/wheel">Wheel</Link>
                <Link to="/coinflip">Coinflip</Link>
                <Link to="/mines">Mines</Link>
                <Link to="/towers">Towers</Link>
                <Link to="/jackpot">Jackpot</Link>
            </div>
        </div>
    );
};

export default Home;
