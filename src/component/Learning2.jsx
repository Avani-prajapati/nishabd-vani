import React from 'react'
import Alphabets from './Alphabets';
import Maths from "./Maths"
import Science from './Science';
import Vocabulary from './Vocabulary';


export default function Learning2({handleClick,click,section}) {
    const renderSection = () => {
       let sec = section.slice(0, -1);
       let num = section.charAt(section.length - 1)
       console.log(num)
        switch (sec) {
          case 'alphabets':
            return <Alphabets num={num} ></Alphabets>;
          case 'maths':
            return <Maths num={num}></Maths>;
          case 'science':
            return <Science num={num} />;
          case 'vocabulary':
            return <Vocabulary num={num}/>;
          default:
            return <div>Section not found</div>;
        }
      };
  return (
    <>
    <div className='text-center'>

    <button className='font-bold my-3 text-xl hover:text-blue-800 ' onClick={handleClick}>
              {'<-'}  Back
          </button>
    </div>
    <div>
      {renderSection()}
    </div>
    </>
  )
}