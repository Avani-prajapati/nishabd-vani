import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Numbers = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/learning/Number`)
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
    axios.get(`http://localhost:5000/learning/Number/${action}`)
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
          className={`${number < 4?"size-24":`${number < 10?"size-14":`size-10` }`}`}
        />
      );
    }
    return basketImages;
  };

  return (
    <div className="flex flex-col items-center mt-8 max-h-screen ">
      <h1 className="text-3xl font-bold mb-4">Numbers</h1>

      <div className="bg-white p-10 w-96 h-96 rounded-lg shadow-lg bg-orange-50 flex flex-col items-center justify-center">
        {data != null ?
          <>
            <img
              src={data.signImage}
              alt='not found'
              className="w-20 h-20 mb-4"
            />
            <p className="text-6xl font-bold mb-4">{data.number}</p>
            <div className="flex flex-wrap justify-center">
              {generateBasketImages(data.number)}
            </div>
          </>
          : <></>}
      </div>

      <div className="flex justify-between w-full max-w-xs mt-8">
        <button
          className="text-lg font-medium text-gray-700"
          onClick={() => handleClick("prev")}
        >
          &lt; Previous
        </button>

        <button
          className="text-lg font-medium text-gray-700"
          onClick={() => handleClick("next")}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default Numbers;
