// src/pages/Crash.js
import React, { useState, useEffect } from 'react';

const Crash = () => {
    const [bet, setBet] = useState('');
    const [multiplier, setMultiplier] = useState(1.0);
    const [gameStatus, setGameStatus] = useState('waiting'); // waiting, in-progress, ended

    useEffect(() => {
        if (gameStatus === 'in-progress') {
            const interval = setInterval(() => {
                setMultiplier(prevMultiplier => prevMultiplier + 0.1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [gameStatus]);

    const startGame = () => {
        setGameStatus('in-progress');
    };

    const cashOut = () => {
        setGameStatus('ended');
    };

    return (
        <div className="game">
            <h2>Crash Game</h2>
            {gameStatus === 'waiting' && (
                <div>
                    <input 
                        type="number" 
                        placeholder="Bet amount" 
                        value={bet} 
                        onChange={(e) => setBet(e.target.value)} 
                    />
                    <button onClick={startGame}>Start</button>
                </div>
            )}
            {gameStatus === 'in-progress' && (
                <div>
                    <p>Multiplier: {multiplier.toFixed(2)}x</p>
                    <button onClick={cashOut}>Cash Out</button>
                </div>
            )}
            {gameStatus === 'ended' && (
                <div>
                    <p>Game ended at {multiplier.toFixed(2)}x</p>
                    <button onClick={() => setGameStatus('waiting')}>Play Again</button>
                </div>
            )}
        </div>
    );
};

export default Crash;
