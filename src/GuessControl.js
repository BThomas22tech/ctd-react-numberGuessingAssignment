import React from "react";
import Button from "./Button";

function GuessControl(prop) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  function handleInputChange(event) {
    const currentGuess = event.target.value;
    setCurrentGuess(currentGuess);
  }
  function onSubmitGuess() {
    prop.onGuess(parseInt(currentGuess));
    setCurrentGuess("");
  }

  return (
    <div>
      <input type="number" value={currentGuess} onChange={handleInputChange} />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
