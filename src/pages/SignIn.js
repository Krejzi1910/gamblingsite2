// src/pages/SignIn.js
import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika logowania
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Zaloguj się</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Zaloguj się</button>
        </form>
    );
};

export default SignIn;
