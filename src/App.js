import React, { useState, createContext } from 'react';

import Game from './Game';
import Result from './Result';

import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

export const AppContext = createContext();

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  return (
    <AppContext.Provider value={{ questions, step }}>
      <div className="App">
        {step !== questions.length ? (
          <Game question={question} onClickVariant={onClickVariant} />
        ) : (
          <Result correct={correct} />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
