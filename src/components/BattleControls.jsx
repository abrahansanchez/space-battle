import React from "react";
import styles from "./BattleControls.module.css";

function BattleControls({ onFire, onRestart, gameOver }) { 
  return (
    <div>
      {!gameOver && (
        <button className={`${styles.button} ${styles["fire-button"]}`} onClick={onFire}>
          Fire ☄️
        </button>
      )}

      {gameOver && (
        <button className={`${styles.button} ${styles["restart-button"]}`} onClick={onRestart}>
          Restart 🔄
        </button>
      )}
    </div>
  );
}

export default BattleControls;
