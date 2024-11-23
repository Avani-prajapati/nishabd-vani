import React, { useState, useEffect } from 'react';

export default function ArithmeticPage({ Click }) {
  const [selectedOption, setSelectedOption] = useState('Addition');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoSources = {
    Addition: 'https://www.youtube.com/embed/YMM17IgxtxE',
    Subtraction: 'https://www.youtube.com/embed/dyBFFQIoF8M',
    Multiplication: 'https://www.youtube.com/embed/fQ7L4kxJZvk',
    Division: 'https://www.youtube.com/embed/UipahxduaHI',
  };

  const gifSources = {
    Addition: './ImagesNV/Arithmetic/add_example.gif',
    Subtraction: './ImagesNV/Arithmetic/subtract_example.webp',
    Multiplication: './ImagesNV/Arithmetic/multiply_example.gif',
    Division: './ImagesNV/Arithmetic/divsion_example.gif',
  };

  const gifMain = {
    Addition: './ImagesNV/Arithmetic/addition.gif',
    Subtraction: './ImagesNV/Arithmetic/subtraction.gif',
    Multiplication: './ImagesNV/Arithmetic/multiplication.gif',
    Division: './ImagesNV/Arithmetic/division.gif',

  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    
      {/* Main container */}
      <div className="flex flex-col md:flex-row items-start w-full min-h-screen bg-white overflow-hidden">
        {/* Left Column: Addition and Subtraction */}
        
        <div className="flex flex-col w-full md:w-1/4 md:min-h-screen bg-red-100 p-12 pt-0 space-y-4">
        <button 
        className="text-lg font-bold text-gray-700 w-full mt-2 hover:text-blue-800 mb-4 self-start" 
        onClick={Click}
      >
        {'<-'} Back
      </button>
          {['Addition', 'Subtraction'].map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`w-full flex flex-col items-center justify-center  font-bold text-center rounded-lg p-4 ${
                selectedOption === option ? 'bg-red-400 text-white' : 'bg-white text-gray-700'
              } shadow-lg`}
            >
              <img
                src={gifMain[option]}
                alt={`${option} icon`}
                className="size-40 mb-2 hidden md:block rounded-lg"
              />
              <span>{option} {option === 'Addition' ? '+' : '-'}</span>
            </button>
          ))}
           {['Multiplication', 'Division'].map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`w-full flex flex-col md:hidden items-center justify-center font-bold text-center rounded-lg p-4 ${
                selectedOption === option ? 'bg-red-400 text-white border ' : 'bg-white text-gray-700'
              } shadow-lg`}
            >
              <img
                src={gifMain[option]}
                alt={`${option} icon`}
                className="size-40 hidden md:block rounded-lg"
              />
              <span>{option} {option === 'Multiplication' ? '×' : '÷'}</span>
            </button>
          ))}
        </div>

        {/* Middle Column: Video and Example */}
       
        <div className="flex flex-col w-full md:w-1/2 items-center p-6">
    
          {/* <h2 className="text-lg font-semibold mb-2 text-center">{selectedOption} Video</h2> */}
          <div className="w-full h-52 md:h-[24rem] bg-gray-200 rounded-lg overflow-hidden shadow-md mb-4">
            <iframe
              src={videoSources[selectedOption]}
              title={`${selectedOption} video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className='flex gap-9 justify-center itmes-center'>
         <div className='flex flex-col justify-center'>
          <h3 className="text-lg font-bold mb-2 text-center font-mono">Example of {selectedOption}</h3>
         </div>
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
            <img
              src={gifSources[selectedOption]}
              alt={`${selectedOption} example`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-lg"
            />
          </div>
          </div>
        </div>

        {/* Right Column: Multiplication and Division */}
        <div className="md:flex flex-col w-full md:w-1/4 min-h-screen hidden bg-red-100 p-12 pt-16 space-y-4 ">
    
          {['Multiplication', 'Division'].map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`w-full flex flex-col items-center justify-center font-bold text-center rounded-lg p-4 ${
                selectedOption === option ? 'bg-red-400 text-white border ' : 'bg-white text-gray-700'
              } shadow-lg`}
            >
              <img
                src={gifMain[option]}
                alt={`${option} icon`}
                className="size-40 rounded-lg"
              />
              <span>{option} {option === 'Multiplication' ? '×' : '÷'}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
