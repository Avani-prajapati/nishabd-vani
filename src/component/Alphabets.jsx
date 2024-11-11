import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Alphabets({ num }) {
  const [number, setNumber] = useState(num);
  const [isQuiz, setIsQuiz] = useState(false);
  const [data, setData] = useState({});
  const [isCorrect, setIsCorrect] = useState(null); // Initialize as null to differentiate from initial state
  const [wrongData, setWrongData] = useState(null); // Initialize as null to avoid rendering wrong data screen on load

  useEffect(() => {
    setData({});
    setIsCorrect(null);
    setWrongData(null);
    setIsQuiz(false);
  }, []);

  useEffect(() => {
    setIsCorrect(null);
    const endpoint = number == 1 ? "alphabetEng" : "alphabetGuj";
    axios.get(`http://localhost:5000/learning/${endpoint}`,
      {withCredential:true}
    )
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [number]);

  function handleClick(s) {
   setIsCorrect(false)
    const endpoint = number == 1 ? "alphabetEng" : "alphabetGuj";
    const action = s == "prev" ? "prev" : "next";
    axios.get(`http://localhost:5000/learning/${endpoint}/${action}`,
      {withCredentials:true}
    )
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function checkAns(op) {
    if (data.answer == op) {
      setIsCorrect(true);
      setWrongData(null); // Clear wrong data since the answer is correct
    } else {
      setIsCorrect(false);
      setWrongData(data); // Store the current data as wrongData
    }
    setData({});
    setIsQuiz(false);
  }

  function handleWrong() {
    setData(wrongData);
    setIsQuiz(true);
    setWrongData(null); // Clear wrong data once user decides to try again
  }

  const getBackgroundColor = () => {
    if (isCorrect == true) return 'bg-green-500';
    if (isCorrect == false) return 'bg-red-500';
    if (isQuiz) return 'bg-yellow-500';
    return 'bg-blue-500';
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center max-h-screen basis-4/6 ">
        <div className='block text-center text-2xl font-bold'>{num == 1 ? "English Alphabets" : "ગુજરાતી મૂળાક્ષરો"}</div>
        <div className={`bg-white rounded-xl mt-3  mx-4 sm:mx-0 shadow-lg p-8  `}>
          {data.flag == "Learn" ? (
            <div className="flex flex-col sm:w-96 items-center justify-center h-[21rem] space-y-6 p-4">
              <div className="text-6xl">
                <img src={data.signImage} className='size-44 border border-black rounded-md' alt="Sign" />
              </div>
              <div className="text-4xl font-bold">{data.alphabet}</div>
              <img src={data.objectImage} className='h-28' alt="Object" />
            </div>
          ) : (
            <div className='flex flex-col items-center justify-center h-[22rem] space-y-6 sm:w-72'>
              <div className="text-4xl font-bold">{data.question}</div>
              {data.options ? (
                <div className='flex flex-wrap w-full gap-3'>
                  <div className='w-full text-center  text-xl font-semibold'>{num == 1 ? "Guess the Sign..." : "નિશાની ઓળખો..."}</div>
                  <div className='flex  items-center justify-center w-full gap-4'>
                    <img src={data.options[0]["1"]} className='sm:h-28 h-24 w-28 my-2 sm:w-36 border border-black rounded shadow-md cursor-pointer' alt="Option 1" onClick={() => checkAns(data.options[0]["1"])} />
                    <img src={data.options[0]["2"]} className='sm:h-28  h-24 w-28 my-2 sm:w-36 border border-black rounded shadow-md cursor-pointer' alt="Option 2" onClick={() => checkAns(2)} />
                  </div>
                  <div className='flex w-full justify-center'> 
                    <img src={data.options[0]["3"]} className='sm:h-28  h-24 w-28 my-2 sm:w-36 border border-black rounded shadow-md cursor-pointer' alt="Option 3" onClick={() => checkAns(3)} />
                  </div>
                </div>
              ) : (
                isCorrect !== null && (

                     <div className=' h-[28rem] p-3 md:w-72'>
                      {isCorrect ? (
                      <div className='w-full flex flex-col justify-center items-center gap-3'><img src="/ImagesNV/AlphabetQuiz/Hurrey.jpeg" className='h-40 size-48 rounded-lg' alt="Correct" />
                      <div className='mt-4'>"Correct!"</div> <div>You got it 🥳🎉</div>
                      </div>

                    ) : (
                      wrongData && (
                        <>
                          <div className='md:w-full flex justify-center'><img src='ImagesNV/AlphabetQuiz/Wrong.png' className=' size-40' alt="Wrong" /></div>
                          <div className='text-center mt-5 text-xl'>
                            <div>Oo Wrong Ans</div>
                            <div className='flex items-center w-full'>
                              <div className='md:w-full flex gap-3 justify-center my-2 items-center'>
                                <div>Ans :</div>
                                <img src={wrongData.answer} className='size-24' alt="Correct Answer" />
                              </div>
                            </div>
                            <button className='bg-red-500 text-white rounded p-2 mb-3' onClick={handleWrong}>Try Again</button>
                          </div>
                        </>
                      )
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
        <div className="flex justify-evenly w-full px-8 py-4 mt-8">
          <button className="hover:text-white p-2 rounded text-blue-400 text-2xl border font-bold border-blue-400 hover:bg-blue-500" onClick={() => handleClick("prev")}>{'<'} prev </button>
          <button className="hover:text-white text-2xl border shadow-md text-blue-400 font-bold border-blue-400 rounded p-2 hover:bg-blue-500" onClick={() => handleClick("next")}>next {'>'}</button>
        </div>
      </div>
    </>
  );
}
