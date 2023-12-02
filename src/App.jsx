import { useEffect, useState } from "react";
import "./App.css";
import quizData from "./quizData";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);
  const [wrongAnswersCounter, setWrongAnswersCounter] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const { question, choices, correctAnswer } = quizData[activeQuestion];

  useEffect(() => {
    console.log("Certas: ", correctAnswersCounter);
    console.log("Erradas: ", wrongAnswersCounter);
  }, [correctAnswersCounter, wrongAnswersCounter]);

  const hasSelectedAnswer = selectedAnswerIndex !== null;

  const handleNextQuestion = () => {
    setActiveQuestion((prev) => prev + 1);
    isCorrectAnswer
      ? setCorrectAnswersCounter((prev) => prev + 1)
      : setWrongAnswersCounter((prev) => prev + 1);
    setSelectedAnswerIndex(null);
  };

  const handleAnswerClick = (answer, index) => {
    if (selectedAnswerIndex === index) {
      setSelectedAnswerIndex(null);
    } else {
      setSelectedAnswerIndex(index);
    }
    setIsCorrectAnswer(answer === correctAnswer);
  };

  return (
    <div className="container">
      <div className="quiz-container" id="quiz">
        <div>
          <span className="active-question">{activeQuestion + 1}</span>
          <span className="total-question">/{quizData.length}</span>
        </div>
        <h2 className="question-title">{question}</h2>
        <ul className="answers">
          {choices.map((answer, index) => (
            <li
              className={selectedAnswerIndex === index ? "selected-answer" : ""}
              key={answer}
              onClick={() => handleAnswerClick(answer, index)}
            >
              {answer}
            </li>
          ))}
        </ul>
        <button
          className="submit"
          onClick={handleNextQuestion}
          disabled={!hasSelectedAnswer}
        >
          {!hasSelectedAnswer
            ? "Selecione uma resposta"
            : activeQuestion === quizData.length - 1
            ? "Finalizar"
            : "Próximo"}
        </button>
      </div>
    </div>
  );
}

export default App;
