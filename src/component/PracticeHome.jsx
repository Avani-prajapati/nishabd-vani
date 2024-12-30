import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PracticeQuiz from './PracticeQuiz';
import WritingPad from "./WritingPad"

export default function PracticeHome() {
  const [module, setmodule] = useState(null);
  const [quizData, setQuizData] = useState(null);
  const[write,setWrite] = useState(false);
  const number_of_que = 10;

  useEffect(() => {
    if (module) {
      setWrite(false); 
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
      <div className="basis-1/5 bg-blue-200 py-3 md:block flex flex-col md:flex-row justify-evenly md:h-auto px-4">
        <div className="md:flex-col md:justify-start md:items-start text-black my-5">
          <h4 className="sm:text-xl font-bold font-serif mb-3">Practice Quiz</h4>
          <ol className="sm:text-xl px-4 flex flex-row gap-3 flex-wrap md:flex-nowrap md:flex-col justify-center md:justify-end md:block  text-slate-700 font-mono">
            <li>
              <input
                type="radio"
                id="maths"
                name="quiz"
                value="Maths"
                onChange={(e) => setmodule('maths')}
                className='md:hidden'
              />
              <label htmlFor="maths" className='md:hidden'>  Maths Quiz</label>
              <img src='/ImagesNV/Learning1/MathsLearn.png' className={`size-24 w-40 p-2 hidden md:block ${
                  module === "maths" ? "border-2 border-black rounded-lg" : ""
                } hover:border-2 hover:border-black hover:cursor-pointer hover:rounded-lg my-5`} onClick={e=>setmodule("maths")}></img>
            </li>
            <li>
              <input
                type="radio"
                id="alphabet"
                name="quiz"
                value="Alphabet"
                onChange={(e) => setmodule('alpha')}
                className='md:hidden'

              />
              <label htmlFor="alphabet" className='md:hidden'>  Alphabet Quiz</label>
              <img src='/ImagesNV/Learning1/alp.png' className={`size-24 w-40 p-2 hidden md:block ${
                  module === "alpha" ? "border-2 border-black rounded-lg" : ""
                } hover:border-2 hover:border-black hover:cursor-pointer hover:rounded-lg my-5`} onClick={e=>setmodule("alpha")}></img>

            </li>
            <li>
              <input
                type="radio"
                id="science"
                name="quiz"
                value="Science"
                onChange={(e) => setmodule('science')}
                className='md:hidden'
              />
              <label htmlFor="science" className='md:hidden'>  Science Quiz</label>
              <img src='/ImagesNV/Learning1/sc.png' className={`size-24 w-40 p-2 hidden md:block ${
                  module === "science" ? "border-2 border-black rounded-lg" : ""
                } hover:border-2 hover:border-black hover:cursor-pointer hover:rounded-lg my-5`} onClick={e=>setmodule("science")}></img>
            </li>
            <li>
              <input
                type="radio"
                id="word"
                name="quiz"
                value="Word"
                onChange={(e) => setmodule('word')}
                className='md:hidden'
              />
              <label htmlFor="word" className='md:hidden'>  Word Quiz</label>
              <img src='/ImagesNV/Learning1/wo.png'  className={`size-24 w-40 p-2 hidden md:block ${
                  module === "word" ? "border-2 border-black rounded-lg" : ""
                } hover:border-2 hover:border-black hover:cursor-pointer hover:rounded-lg my-5`} onClick={e=>setmodule("word")}></img>
            </li>
          </ol>
        </div>
        <hr/>

        <div className="md:flex-col md:justify-start md:items-start text-black my-5">
          <h4 className="sm:text-xl font-bold font-serif mb-3">Writting Practice </h4>
          <ol className="sm:text-xl px-4 flex flex-row gap-3 flex-wrap md:flex-nowrap md:flex-col justify-center md:justify-end md:block  text-slate-700 font-mono">
            <li>
            <input
                type="radio"
                id="write"
                name="quiz"
                value="Write"
                onChange={(e) => setWrite(true)}
                className='md:hidden'
              />
              <label htmlFor="write" className='md:hidden'> Writting Pad</label>
              <img src='/ImagesNV/Learning1/wp.png' alt=''  className={`size-44 w-36 hidden md:block ${
                  write ? "border-2 border-black rounded-lg" : ""
                } hover:border-2 hover:border-black hover:cursor-pointer hover:rounded-lg my-4`} onClick={e=>{setWrite(true); setmodule(null)}}></img>
            </li>
          </ol>
        </div>
        <hr />


      </div>
      
      {write?
      <div className="basis-4/5 items-center text-center">
        <WritingPad></WritingPad>
      </div>:
      <div className="basis-4/5 items-center text-center">
          <PracticeQuiz quizData={quizData} module={module} baseCall={baseCall}/>
      </div>}
      
    </div>
  );
}
