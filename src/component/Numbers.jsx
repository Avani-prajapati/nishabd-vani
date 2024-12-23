import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Numbers = ({Click}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/learning/Number`,
      {withCredentials:true}
    )
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  function handleClick(s) {
    const action = s === "prev" ? "prev" : "next";
    axios.get(`http://localhost:5000/learning/Number/${action}`,
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

  const generateBasketImages = (number) => {
    const basketImages = [];
    for (let i = 0; i < number; i++) {
      basketImages.push(
        <img
          key={i}
          src={data.Basket}
          alt="Basket"
          className={`${number < 4?"sm:size-24 size-16":`${number < 10?"sm:size-14 size-12":`sm:size-10 size-8` }`}`}
        />
      );
    }
    return basketImages;
  };

  return (
    <div className="flex flex-col items-center w-auto mt-8 sm:mx-4 max-h-screen ">
       <button className='font-bold my-3 sm:text-xl hover:text-blue-800 ' onClick={Click}>
              {'<-'}  Back
          </button>
      <h1 className="sm:text-3xl font-bold mb-4">Numbers</h1>

      <div className=" p-10  w-56  sm:w-96 sm:h-96 h-80 rounded-lg shadow-lg bg-orange-50 flex flex-col items-center justify-center">
        {data != null ?
          <>
            <img
              src={data.signImage}
              alt='not found'
              className="sm:size-20 size-16 mb-4"
            />
            <p className="sm:text-6xl text-2xl font-bold mb-4">{data.number}</p>
            <div className="flex flex-wrap justify-center">
              {generateBasketImages(data.number)}
            </div>
          </>
          : <></>}
      </div>

      <div className="md:flex hidden justify-between w-full max-w-xs mt-8">
        <button
          className="hover:text-white p-2 rounded text-blue-400 text-2xl border font-bold border-blue-400 hover:bg-blue-500"
          onClick={() => handleClick("prev")}
        >
          &lt; Pre
        </button>

        <button
          className="hover:text-white p-2 rounded text-blue-400 text-2xl border font-bold border-blue-400 hover:bg-blue-500"
          onClick={() => handleClick("next")}
        >
          Next &gt;
        </button>
      </div>
      <div className="flex md:hidden justify-between mb-4 p-5 w-full max-w-xs mt-8">
        <button
          className="hover:text-white p-2 rounded text-blue-400 text-2xl border font-bold border-blue-400 hover:bg-blue-500"
          onClick={() => handleClick("prev")}
        >
          {'<'}
        </button>

        <button
          className="hover:text-white p-2 rounded text-blue-400 text-2xl border font-bold border-blue-400 hover:bg-blue-500"
          onClick={() => handleClick("next")}
        >
          {'>'} 
        </button>
      </div>
    </div>
  );
};

export default Numbers;
