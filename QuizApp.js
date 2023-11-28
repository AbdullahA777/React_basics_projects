


import React, { useState } from "react";
import quizData from "./QuizData";

function QuizApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const clickHandle = () => {
    setIndex(index < 6 ? index + 1 : index);
  };

  const tryAgain = () => {
    setIndex(0);
    setScore(0); 
  };

  const updateScore = (e) => {
    const selectedOption = e.target.value;
    const isCorrect = quizData[index].options[selectedOption].correct;

    if (isCorrect) {
      setScore(score + 5);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {index === 0 ? (
        <WelcomeScreen clickHandle={clickHandle} />
      ) : index < 6 ? (
        <div>
          <div className="text-center">
            <h1 className="text-center">Quiz App</h1>
            <h2>
              {index }:{quizData[index].question}
            </h2>
            {quizData[index].options.map((option, i) => (
              <div key={i} className="form-check">
                <input
                  onClick={updateScore}
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id={`flexRadioDefault${i + 1}`}
                  value={i}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexRadioDefault${i + 1}`}
                >
                  <p>
                    {i + 1}.{option.text}
                  </p>
                </label>
              </div>
            ))}
            <button className="btn btn-primary" onClick={clickHandle}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <ResultScreen tryAgain={tryAgain} score={score} />
      )}
    </div>
  );
}

const WelcomeScreen = ({ clickHandle }) => (
  <div>
    <h1 className="mb-4">Welcome to the Quiz App!</h1>
    <p>Test your knowledge with our interesting questions.</p>
    <button className="btn btn-primary" onClick={clickHandle}>
      Start Quiz
    </button>
  </div>
);

const ResultScreen = ({ tryAgain, score }) => (
  <div>
    <h2 className="mb-4">Results</h2>
    <p>You scored {score} out of 25. Well done!</p>
    <button className="btn btn-secondary mt-3" onClick={tryAgain}>
      Try Again
    </button>
  </div>
);

export default QuizApp;
