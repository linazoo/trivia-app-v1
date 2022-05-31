import React from "react";

import { questions } from "./gameData";
import { useLocalStorage } from "./hooks";
import { todaysDate } from "./utils";
import Trivia from "./components/Trivia";
import GameOver from "./components/GameOver";
import WelcomeBanner from "./components/WelcomeBanner";

import "./styles.css";

export default function App() {
  const [showWelcomeBanner, setShowWelcomeBanner] = React.useState(true);
  const [score, setScore] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [highScore, setHighScore] = useLocalStorage("highScore", "0");
  const [highScoreDate, setHighScoreDate] = useLocalStorage(
    "highScoreDate",
    ""
  );

  const advanceNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setGameOver(true);
      if (score > highScore) {
        setHighScore(score);
        const today = todaysDate();
        setHighScoreDate(today);
      }
    }
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="app">
      {showWelcomeBanner ? (
        <WelcomeBanner
          date={highScoreDate}
          highScore={highScore}
          onPlayClick={() => setShowWelcomeBanner(false)}
        />
      ) : gameOver ? (
        <GameOver
          date={highScoreDate}
          score={score}
          highScore={highScore}
          questions={questions}
          resetGame={resetGame}
        />
      ) : (
        <Trivia
          score={score}
          questions={questions}
          currentQuestion={currentQuestion}
          onCorrectAnswer={incrementScore}
          advanceNextQuestion={advanceNextQuestion}
        />
      )}
    </div>
  );
}
