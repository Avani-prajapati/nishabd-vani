import React from 'react'
import PracticeQuiz from './PracticeQuiz'

export default function PracticeHome() {
  return (
    <div className='md:flex justify-start h-auto'>
        <div className='basis-1/5 bg-blue-200 py-3 md:block flex justify-evenly md:h-screen px-4'>
           <div className='md:flex-col justify-start items-start text-black my-5'>
              <h4 className='text-xl font-bold font-serif'>Practice Quiz</h4>
              <ol className='text-xl px-4 flex-col justify-end hidden md:block text-slate-700 font-mono'>
                  <li className=''> - Maths quiz</li>
                  <li>- Alphabet quiz</li>
                  <li>- Science Quiz</li>
                  <li>- Match the word</li>
              </ol>
           </div>
           <hr></hr>
           <div className='md:flex-col justify-start items-start text-black  my-5'>
              <h4 className='text-xl font-bold font-serif'>Classroom Test</h4>
              <ol className='text-xl px-4 flex-col justify-end hidden md:block font-mono break-words  text-slate-700 '>
                  <li className=''>- Enter to class</li>
                  <li>- Take quiz</li>
                  <li>- Previos quiz</li>
                  <li>- OverallScore</li>
              </ol>
           </div>
           <hr></hr>
        </div>
        <div className='basis-4/5 items-center text-center '>
           <PracticeQuiz></PracticeQuiz>
        </div>
    </div>
  )
}
