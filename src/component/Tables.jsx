import React, { useState, useEffect } from 'react';

export default function Tables() {
  const [visibleItems, setVisibleItems] = useState(0);
  const [key, setKey] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0); 
  const [currentDiv,setCurrentDiv] = useState(2);

  const multiplicationData = Array.from({ length: 10 }, (_, i) => `${selectedNumber} * ${i + 1} = `);
  const tableans = Array.from({ length: 10 }, (_, i) => (selectedNumber * (i + 1)).toString());

  const images = [
    { src: "/ImagesNV/2.jpg", number: 2 },
    { src: "/ImagesNV/3.jpg", number: 3 },
    { src: "/ImagesNV/4.jpg", number: 4 },
    { src: "/ImagesNV/5.jpg", number: 5 },
    { src: "/ImagesNV/6.jpg", number: 6 },
    { src: "/ImagesNV/7.jpg", number: 7 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (visibleItems < tableans.length) {
      const timer = setTimeout(() => {
        setVisibleItems(visibleItems + 1);
        setKey(visibleItems + 1); // Update key with visibleItems
        navigator.vibrate(200);
      }, 2000); // Adjust the delay as per your need
      return () => clearTimeout(timer);
    }
  }, [visibleItems, tableans.length]);

  // Handle image click
  const handleImageClick = (number) => {
    console.log(number)
    setCurrentDiv(number);
    setSelectedNumber(number);
    setVisibleItems(0); 
  };

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 min-w-screen min-h-screen px-10 ">
      {/* Left side numbers */}
      <div className="flex sm:flex-col flex-wrap gap-4 md:items-center  space-y-4 p-4 basis-1/6 bg-orange-300 md:min-h-screen h-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={` ${currentDiv == key ?'size-28':''} relative w-24 h-24 flex items-center justify-center gap-6 text-3xl font-bold bg-white rounded-lg shadow-md overflow-hidden cursor-pointer`}
            onClick={() => handleImageClick(image.number)} // Update selected number on click
          >
            
              <img
                src={image.src}
                alt="not found"
                className=" w-full h-full object-cover"
              />
           
          </div>
        ))}
      </div>

      {/* Multiplication Table */}
      <div className="md:p-10 p-4 m-4 md:m-0 bg-orange-100 rounded-lg shadow-lg md:mx-8 h-[32rem] basis-5/6">
        <h1 className="text-3xl font-bold mb-4 text-center">Multiplication Table of {selectedNumber}</h1>
        {selectedNumber == 0?<div className='text-2xl font-semibold text-center w-full h-96 flex items-center justify-center'>👈 Select Number for generate table from left div</div>:
        <div className='flex justify-center gap-4'>
          <div className="space-y-2">
            {multiplicationData.map((item, index) => (
              <p
                key={index}
                className={`text-center text-2xl font-bold `}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="space-y-2">
            {tableans.slice(0, visibleItems).map((item, index) => (
            <div className='flex gap-2'>
              <p
                key={index}
                className={`transition-opacity duration-500 ease-in-out font-bold ${visibleItems > index ? 'opacity-100 text-center text-2xl' : 'opacity-0'}`}
              >
                {item}
              </p>
              <div className='text-2xl'>
                {index === key - 1 ? " 👈" : ""}
              </div>
              </div>
            ))}
          </div>
        </div>
        }
      </div>
    </div>
  );
}
