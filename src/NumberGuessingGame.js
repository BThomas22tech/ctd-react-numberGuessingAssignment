import React from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

function NumberGuessingGame() {
  const [numberToGuess, setnumberToGuess] = React.useState(getRandomNumber());
  const [numberOfGuesses, setnumberOfGuesses] = React.useState(0);
  const [latestGuess, setlatestGuess] = React.useState("");

  function handleGuess(guess) {
    setlatestGuess(guess);
    setnumberOfGuesses(parseInt(numberOfGuesses) + 1);
  }
  function handleReset() {
    const resetAll = {
      numberToGuess: getRandomNumber(),
      numberOfGuesses: 0,
      latestGuess: null,
    };
    setnumberToGuess(resetAll.numberToGuess);
    setnumberOfGuesses(resetAll.numberOfGuesses);
    setlatestGuess(resetAll.latestGuess);
  }
  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && <GameOver hasWon={isCorrectGuess} onReset={handleReset} />}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
}

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

export default NumberGuessingGame;
