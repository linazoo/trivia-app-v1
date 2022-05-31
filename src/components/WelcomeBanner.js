import React from "react";
import Button from "./Button";

export const WelcomeBanner = ({ highScore, onPlayClick }) => {
  return (
    <div className="welcome-section">
      <h1>Welcome to Trivia!</h1>
      <h2 className="info-section">
        Lets see how much you know about 90's movies and world geography.
      </h2>
      <p>{highScore > 0 ? `Your highest score is ${highScore}.` : null}</p>
      <Button variant="contained" onClick={onPlayClick}>
        Play Now!
      </Button>
    </div>
  );
};

export default WelcomeBanner;
