import React, { useContext } from 'react';
import { AppContext } from './App';

function Result({ correct }) {
  const { questions } = useContext(AppContext);
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <button>Попробовать снова</button>
    </div>
  );
}

export default Result;
