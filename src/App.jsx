import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import BattleControls from "./components/BattleControls";

function App() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");

  const handleFire = () => {
    if (gameOver) return;

    // Generate random damage between 5-20 for player and enemy
    const playerDamage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    const enemyDamage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

    // Calculate new health values
    const newPlayerHealth = Math.max(playerHealth - enemyDamage, 0); // Ensure health doesn't go below 0
    const newEnemyHealth = Math.max(enemyHealth - playerDamage, 0); // Ensure health doesn't go below 0

    // Update state with new health values
    setPlayerHealth(newPlayerHealth);
    setEnemyHealth(newEnemyHealth);

    // Check if game is over
    if (newPlayerHealth <= 0 && newEnemyHealth <= 0) {
      setGameOver(true);
      setMessage("It's a draw 😭");
    } else if (newPlayerHealth <= 0) {
      setGameOver(true);
      setMessage("You lost! 😢");
    } else if (newEnemyHealth <= 0) {
      setGameOver(true);
      setMessage("You won! 🎉");
    }
  }; 

  // Function to restart the game
  const handleRestart = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setGameOver(false);
    setMessage("");
  };

  return (
    <div>
      <GameBoard
        playerHealth={playerHealth}
        enemyHealth={enemyHealth}
        message={message}
        gameOver={gameOver}
      />
      <BattleControls onFire={handleFire} onRestart={handleRestart} gameOver={gameOver} /> {/* Passed gameOver prop */}
    </div>
  );
}

export default App;
