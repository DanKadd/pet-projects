import React, { useContext } from 'react';
import { AppContext } from './App';

function Game({ question, onClickVariant }) {
  const { questions, step } = useContext(AppContext);
  const precent = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${precent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((value, index) => (
          <li key={index} onClick={() => onClickVariant(index)}>
            {value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
