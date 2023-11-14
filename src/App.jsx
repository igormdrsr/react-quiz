import { useEffect, useState } from "react";
import "./App.css";
import quizData from "./quizData";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);
  const [wrongAnswersCounter, setWrongAnswersCounter] = useState(0);
  const { choices, correctAnswer } = quizData[activeQuestion];

  // useEffect(() => {
  //   console.log("certas: ", correctAnswersCounter);
  //   console.log("erradas: ", wrongAnswersCounter);
  // }, [correctAnswersCounter, wrongAnswersCounter]);

  return (
    <>
      <div className="quiz-container" id="quiz">
        <div className="body">
          <p>{`${activeQuestion + 1}/${quizData.length}`}</p>
          <h2 className="question-title">
            {quizData[activeQuestion].question}
          </h2>
          <ul className="answers">
            {choices.map((answer) => (
              <li
                className="item"
                key={answer}
                onClick={() => {
                  setIsCorrectAnswer(answer === correctAnswer);
                }}
              >
                <span>{answer}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="submit"
          onClick={() => {
            setActiveQuestion((prev) => prev + 1);
            isCorrectAnswer
              ? setCorrectAnswersCounter((prev) => prev + 1)
              : setWrongAnswersCounter((prev) => prev + 1);
          }}
        >
          {activeQuestion === quizData.length - 1 ? "Finalizar" : "Próximo"}
        </button>
      </div>
    </>
  );
}

export default App;
