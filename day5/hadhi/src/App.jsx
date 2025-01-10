import React, { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  // Quiz Questions
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correct: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correct: 'Mars',
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: ['Charles Dickens', 'J.K. Rowling', 'William Shakespeare', 'Mark Twain'],
      correct: 'William Shakespeare',
    },
  ];

  // State Management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15); // Timer in seconds
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Current Question
  const currentQuestion = questions[currentQuestionIndex];

  // Timer Logic
  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle Option Selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Handle Next Question
  const handleNext = () => {
    if (!selectedOption) {
      alert('Please select an answer before proceeding.');
      return;
    }

    if (selectedOption === currentQuestion.correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
      setTimeLeft(15); // Reset Timer
    } else {
      setQuizCompleted(true);
    }
  };

  // Restart Quiz
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
    setTimeLeft(15);
    setQuizCompleted(false);
  };

  return (
    <div className="quiz-container">
      {!quizCompleted ? (
        <>
          <h1>Quiz Application</h1>
          <div className="question-container">
            <h2>{currentQuestion.question}</h2>
            <div className="options-container">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  className={`option-button ${
                    selectedOption === option ? 'selected' : ''
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="controls">
            <p>Time Left: {timeLeft}s</p>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      ) : (
        <div className="result-container">
          <h1>Quiz Completed!</h1>
          <p>Your Score: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default App;
