import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PracticeQuiz from './PracticeQuiz';

export default function PracticeHome() {
  const [module, setmodule] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const number_of_que = 10;

  useEffect(() => {
    if (module) {
      console.log(module);
      console.log(localStorage.getItem('token'));
      console.log(number_of_que)
      axios.post(
        'http://localhost:5000/quiz/load-questions',
        {
          module,
          number_of_que,
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        setQuizData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error);
      });
    }
  }, [module]);

  function baseCall(){
    if (module) {
      console.log(module);
      console.log(localStorage.getItem('token'));
      console.log(number_of_que)
      axios.post(
        'http://localhost:5000/quiz/load-questions',
        {
          module,
          number_of_que,
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        setQuizData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error);
      });
    }
  }

  return (
    <div className="md:flex justify-start min-h-screen">
      <div className="basis-1/5 bg-blue-200 py-3 md:block flex justify-evenly md:h-screen px-4">
        <div className="md:flex-col md:justify-start md:items-start text-black my-5">
          <h4 className="text-xl font-bold font-serif mb-3">Practice Quiz</h4>
          <ol className="text-xl px-4 flex flex-row gap-3 flex-wrap md:flex-nowrap md:flex-col justify-center md:justify-end md:block text-slate-700 font-mono">
            <li>
              <input
                type="radio"
                id="maths"
                name="quiz"
                value="Maths"
                onChange={(e) => setmodule('maths')}
              />
              <label htmlFor="maths">  Maths Quiz</label>
            </li>
            <li>
              <input
                type="radio"
                id="alphabet"
                name="quiz"
                value="Alphabet"
                onChange={(e) => setmodule('alpha')}
              />
              <label htmlFor="alphabet">  Alphabet Quiz</label>
            </li>
            <li>
              <input
                type="radio"
                id="science"
                name="quiz"
                value="Science"
                onChange={(e) => setmodule('science')}
              />
              <label htmlFor="science">  Science Quiz</label>
            </li>
            <li>
              <input
                type="radio"
                id="word"
                name="quiz"
                value="Word"
                onChange={(e) => setmodule('word')}
              />
              <label htmlFor="word">  Word Quiz</label>
            </li>
          </ol>
        </div>
        <hr />
      </div>
      <div className="basis-4/5 items-center text-center">
          <PracticeQuiz quizData={quizData} module={module} baseCall={baseCall}/>
      </div>
    </div>
  );
}
