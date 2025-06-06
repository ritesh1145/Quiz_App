// src/App.js

import React, { useState } from "react";
import questions from "./question";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {showScore ? (
        <div>
          <h2>
            You scored {score} out of {questions.length}
          </h2>
        </div>
      ) : (
        <div>
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p>{questions[currentQuestion].question}</p>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {questions[currentQuestion].options.map((option) => (
              <li key={option} style={{ margin: "8px 0" }}>
                <button
                  onClick={() => handleOptionClick(option)}
                  style={{
                    padding: "10px 20px",
                    backgroundColor:
                      selectedOption === option ? "#add8e6" : "#f0f0f0",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
