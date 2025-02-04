import React from 'react';
import Styles from './GameBoard.module.css';


function GameBoard({ playerHealth, enemyHealth, message, gameOver}) {
    return (
        <div className={Styles["game-container"]}>
            <h1>Space Battle Simulator</h1>
            <h2>Player Health ❤️‍🩹: {playerHealth} </h2>
            <h2>Enemy Health 💀:{enemyHealth}</h2>
            {gameOver && <h3>{message}</h3>}

            {gameOver && <h3>{}message</h3>}
        </div>
    );
}
export default GameBoard;