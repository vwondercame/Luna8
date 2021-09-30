import React, { useState } from "react";
import "./Magicpage.scss";

const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "Most likely",
  "The outlook is good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "Should you be asking this?",
  "Outlook is not so good",
  "Very doubtful",
  "Feeling hazy",
  "Ummm maybe not",
  "I'll let you know",
  "Cannot predict now",
  "Concentrate and ask again",
];

function Magicpage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = (e) => {
    e.preventDefault();
    if (!question) {
      return;
    }
    const index = Math.floor(Math.random() * answers.length);
    setAnswer(answers[index]);
  };

  return (
    <div className="magicBall__page">
    <div className="magicBall__outer">
      <div className="epos">
        <div className="eball">
          <div className="egrad"></div>
          <div className="ewin">Î
            <div>
              <div className="triangle"></div>
              <div className="textbox">{answer}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="magicBall-container">
        <form onSubmit={getAnswer}>
          <div className="magicBall__input-box">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="magicBall__input"
              placeholder="Enter a 'Yes' or 'No' question"
              name="Submission"
            />
          </div>
          <button className="magicBall__button" type="submit">
            Fortell
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Magicpage;
