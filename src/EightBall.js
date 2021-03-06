import React, { useState } from "react";
import "./EightBall.css";

const ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

const EightBall = ({ answers = ANSWERS }) => {

  const [answer, setAnswer] = useState({ msg: "Think of a question", color: "black" });
  const [count, setCount] = useState({
    yes: 0,
    maybe: 0,
    no: 0
  });

  const getRandAnswer = () => {
    const idx = Math.floor(Math.random() * 20);
    const msg = answers[idx];

    updateCount(msg.color);

    setAnswer(msg);
  }

  const updateCount = (color) => {
    let outcome = "";

    if (color === "green") {
      outcome = "yes";
    } else if (color === "goldenrod") {
      outcome = "maybe";
    } else {
      outcome = "no"
    }

    setCount(c => (
      {
        ...c,
        [outcome]: c[outcome] + 1
      }
    ));
  }

  const reset = () => {
    setAnswer({ msg: "Think of a question", color: "black" });
    setCount({
      yes: 0,
      maybe: 0,
      no: 0
    });
  }


  return (
    <div className="EightBall">
      <button className="EightBall-button" style={{ backgroundColor: answer.color }} onClick={getRandAnswer}>{answer.msg}</button>
      <button className="EightBall-reset" onClick={reset}>Reset</button>
      <div className="EightBall-stats">
        <h3>Statistics</h3>
        <p><b>Yes:</b> {count.yes}</p>
        <p><b>Maybe:</b> {count.maybe}</p>
        <p><b>No:</b> {count.no}</p>
      </div>
    </div>
  );
}

export default EightBall;