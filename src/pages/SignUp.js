// src/pages/SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika rejestracji
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Zarejestruj się</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Potwierdź hasło" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="submit">Zarejestruj się</button>
        </form>
    );
};

export default SignUp;
