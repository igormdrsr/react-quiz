import "./App.css";

function App() {
  return (
    <>
      <div className="quiz-container" id="quiz">
        <div className="body">
          <h2 className="question-title"></h2>
          <ul className="answers">
            <li className="input-wrapper">
              <input
                type="radio"
                name="answer"
                className="answer"
                id="a"
                value="a"
              />
              <label id="a_text" for="a"></label>
            </li>
            <li className="input-wrapper">
              <input
                type="radio"
                name="answer"
                className="answer"
                id="b"
                value="b"
              />
              <label id="b_text" for="b"></label>
            </li>
            <li className="input-wrapper">
              <input
                type="radio"
                name="answer"
                className="answer"
                id="c"
                value="c"
              />
              <label id="c_text" for="c"></label>
            </li>
            <li className="input-wrapper">
              <input
                type="radio"
                name="answer"
                className="answer"
                id="d"
                value="d"
              />
              <label id="d_text" for="d"></label>
            </li>
          </ul>
        </div>
        <button className="submit">Enviar</button>
      </div>
    </>
  );
}

export default App;
