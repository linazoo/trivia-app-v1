import React from "react";
import Button from "./Button";

export const GameOver = ({ date, highScore, score, questions, resetGame }) => {
  let level = "dudd";
  let gifSrc =
    "https://media.giphy.com/media/bjfv14wZU7PiM/giphy-downsized-large.gif";

  if (score === questions.length) {
    level = "god";
    gifSrc = "https://media.giphy.com/media/xT0GqssRweIhlz209i/giphy.gif";
  } else if (score >= questions.length / 2) {
    level = "ace";
    gifSrc = "https://giphy.com/static/img/error_pages/crying-cowbow-emoji.gif";
  }

  return (
    <>
      <div className="score-section">
        <div className="gif-section">
          <img
            src={gifSrc}
            title="end-of-game"
            alt="Trivia Title"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <h1>{`You are a Trivia ${level}!`}</h1>
        <p>
          You got {score} out of {questions.length} questions right!
        </p>
        <p>
          Your best score so far is {highScore} out of {questions.length}{" "}
          questions which you got on {date}
        </p>
        <Button variant="contained" onClick={resetGame}>
          Play Again
        </Button>
      </div>
    </>
  );
};

export default GameOver;
