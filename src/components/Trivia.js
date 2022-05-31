import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import Button from "./Button";

export const Trivia = ({
  score,
  currentQuestion,
  questions,
  onCorrectAnswer,
  advanceNextQuestion
}) => {
  const [hasAnswered, setHasAnswered] = React.useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = React.useState(null);
  const [selectedAnswers, setSelectedAnswers] = React.useState([]);

  const handleSingleAnswerClick = (isCorrect) => {
    setHasAnswered(true);
    if (isCorrect === true) {
      setAnsweredCorrectly(true);
      onCorrectAnswer();
    } else {
      setAnsweredCorrectly(false);
    }
  };

  const handleNextQuestionClick = () => {
    advanceNextQuestion();
    setHasAnswered(false);
  };

  const handleCheckboxChange = (toggledItem) => {
    if (selectedAnswers.includes(toggledItem)) {
      const updatedSelectedAnswers = selectedAnswers.filter((selected) => {
        if (selected === toggledItem) {
          return false;
        } else {
          return true;
        }
      });
      setSelectedAnswers(updatedSelectedAnswers);
    } else {
      setSelectedAnswers([...selectedAnswers, toggledItem]);
    }
  };

  const handleMultipleAnswerQuestion = () => {
    const answerOptions = questions[currentQuestion].answerOptions;
    let isCorrect = true;

    const correctAnswers = answerOptions.filter((option) => {
      return option.isCorrect === true;
    });

    if (selectedAnswers.length !== correctAnswers.length) {
      isCorrect = false;
    }

    correctAnswers.forEach((answer) => {
      if (!selectedAnswers.includes(answer.answerText)) {
        isCorrect = false;
      }
    });

    setHasAnswered(true);
    if (isCorrect === true) {
      setAnsweredCorrectly(true);
      onCorrectAnswer();
    } else {
      setAnsweredCorrectly(false);
    }
  };

  return (
    <>
      <div className="question-count">
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <p>Score: {score}</p>
      </div>

      <h1 className="question-text">
        {questions[currentQuestion].questionText}
      </h1>

      {questions[currentQuestion].questionType === "multipleAnswer" ? (
        <div className="multiple-answer-section">
          <FormGroup>
            {questions[currentQuestion].answerOptions.map((answerOption) => {
              return (
                <FormControlLabel
                  key={answerOption.answerText}
                  control={
                    <Checkbox
                      color={
                        hasAnswered
                          ? answerOption.isCorrect
                            ? "success"
                            : "warning"
                          : "primary"
                      }
                      onChange={() =>
                        handleCheckboxChange(answerOption.answerText)
                      }
                    />
                  }
                  label={answerOption.answerText}
                />
              );
            })}
          </FormGroup>
          {!hasAnswered ? (
            <Button
              sx={{
                marginTop: "12px",
                maxWidth: "max-content"
              }}
              variant="contained"
              onClick={handleMultipleAnswerQuestion}
            >
              Set your answer
            </Button>
          ) : null}
        </div>
      ) : (
        <div className="single-answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption) => {
            if (questions[currentQuestion].questionType === "multipleAnswer") {
              return <Checkbox />;
            }
            return (
              <Button
                variant="contained"
                disabled={hasAnswered}
                onClick={() => handleSingleAnswerClick(answerOption.isCorrect)}
                key={answerOption.answerText}
                sx={{
                  "&:disabled": {
                    backgroundColor:
                      hasAnswered && answerOption.isCorrect
                        ? "green"
                        : "tomato",
                    color: hasAnswered ? "white" : "inherit"
                  }
                }}
              >
                {answerOption.answerText}
              </Button>
            );
          })}
        </div>
      )}

      {hasAnswered ? (
        <>
          <div className="feedback-section">
            {answeredCorrectly ? (
              <p className="correct-answer">
                You got it right!
                <span aria-label="party emoji" role="img">
                  &nbsp; 🥳
                </span>
              </p>
            ) : (
              <p className="wrong-answer">
                That was wrong
                <span aria-label="party emoji" role="img">
                  &nbsp; 😳
                </span>
              </p>
            )}
            <Button
              variant="contained"
              onClick={handleNextQuestionClick}
              className="next-question-button"
            >
              Next Question
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Trivia;
