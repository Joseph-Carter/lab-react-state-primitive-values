import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [incrementor, setIncrementor] = useState(1);
  const [payButtonVisible, setPayButtonVisible] = useState(true);

  const incrementScore = () => {
    if (currentScore < 100) {
      setCurrentScore(currentScore + incrementor);
    }
  };

  const increasingIncrementor = () => {
    if (currentScore >= 10) {
      setIncrementor(incrementor + 1);
      setCurrentScore(currentScore - 10);
    } else {
      alert("You can't afford this!");
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
    setIncrementor(1);
    setPayButtonVisible(true);
  };

  return (
    <main>
      <p>React State Lab</p>
      {currentScore >= 100 ? (
        <>
          <h2>You Win!</h2>
          <button onClick={resetGame}>Play again?</button>
        </>
      ) : (
        <>
          <h1>Current Score: { currentScore }</h1>
          <button onClick={ incrementScore }>+{ incrementor }</button>
          {payButtonVisible && (
            <button onClick={ increasingIncrementor }>
              Pay 10 points to change from +{ incrementor } to +{ incrementor + 1 }
            </button>
          )}
        </>
      )}
    </main>
  );
}

export default App;