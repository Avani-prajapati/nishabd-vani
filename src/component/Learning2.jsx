import React from 'react'
import Alphabets from './Alphabets';
import Maths from "./Maths"

export default function Learning2({handleClick,click,section}) {
    const renderSection = () => {
       let sec = section.slice(0, -1);
       let num = section.charAt(section.length - 1);
        switch (sec) {
          case 'alphabets':
            return <Alphabets num={num} Click={handleClick} ></Alphabets>;
          case 'maths':
            return <Maths num={num} Click={handleClick}></Maths>;
          default:
            return <div>Section not found</div>;
        }
      };
  return (
    <>
    <div className='text-center'>
    </div>
    <div>
      {renderSection()}
    </div>
    </>
  )
}
