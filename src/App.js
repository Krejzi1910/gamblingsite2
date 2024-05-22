// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Headereader';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Crash from './pages/Crash'; // Importuj komponenty gier
// Importuj inne komponenty gier, jeśli są już utworzone

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/crash" element={<Crash />} />
                {/* Dodaj trasy dla innych komponentów gier */}
            </Routes>
        </Router>
    );
};

export default App;
