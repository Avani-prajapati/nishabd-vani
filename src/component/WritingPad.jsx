import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';

const WritingPad = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ans, setans] = useState(null);

  const data = ['અ', 'આ', 'ઇ', 'ઈ', 'ઉ', 'ઊ', 'ઋ', 'એ', 'ઐ', 'ઓ', 'ઔ', 'ક', 'ખ', 'ગ', 'ઘ', 'ઙ', 'ચ', 'છ', 'જ', 'ઝ', 'ઞ', 'ટ', 'ઠ', 'ડ', 'ઢ', 'ણ', 'ત', 'થ', 'દ', 'ધ', 'ન', 'પ', 'ફ', 'બ', 'ભ', 'મ', 'ય', 'ર', 'લ', 'વ', 'શ', 'ષ', 'સ', 'હ', 'ળ', 'ક્ષ', 'જ્ઞ'];
  const data2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const [currentArray, setCurrentArray] = useState(data);
  const [currentLetter, setCurrentLetter] = useState(data[0]);

  useEffect(() => {
    selectRandomLetter();
  }, []);

  const selectRandomLetter = () => {
    const arrays = [data, data2];
    const selectedArray = arrays[Math.floor(Math.random() * arrays.length)];
    const selectedLetter = selectedArray[Math.floor(Math.random() * selectedArray.length)];
    setCurrentArray(selectedArray);
    setCurrentLetter(selectedLetter);
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = 200;
    canvas.height = 200;
    canvas.style.width = '200px'; // Scaled display size
    canvas.style.height = '200px';

    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = '#000000';
    context.lineWidth = 8; // Adjust line width for crisp drawing
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const context = contextRef.current;
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setans(null);
  };

  const resetCanvas = () => {
    clearCanvas();
    selectRandomLetter();
  };

  const checkAnswer = () => {
    const pixels = getPixels();
    const route = JSON.stringify(currentArray) === JSON.stringify(data) ? "gujBoard" : "EngBoard";
    axios
      .post(`http://localhost:5000/${route}`, { pixels }, { withCredentials: true })
      .then((res) => {
        console.log(res.data.prediction);
        setans(res.data.prediction);
      })
      .catch((error) => console.error(error));
  };

  const getPixels = () => {
    const canvas = canvasRef.current;
    const imageData = canvas.getContext('2d').getImageData(0, 0, 200, 200); // Full size for crisp image
    const rawPixels = imageData.data;
    const _pixels = [];
    const pixels = [];

    // Extract alpha values (every 4th value)
    for (let i = 0; i < rawPixels.length; i += 4) {
      _pixels.push(rawPixels[i + 3]); // Alpha value
    }

    // Downsample pixels from 200x200 to 50x50
    for (let i = 0; i < _pixels.length; i += 800) {
      for (let j = 0; j < 200; j += 4) {
        pixels.push(_pixels[i + j]);
      }
    }
    return pixels;
  };

  return (
    <div className="bg-blue-100 bg-gradient py-4 px-4 my-6 md:m-6">
      <div
        className="mt-2 sm:p-8 p-5 pt-3 shadow-lg bg-slate-50 rounded-3 text-wrap text-clip basis-1/2"
        style={{ height: "fit-content" }}
      >
        <h1 className="md:text-3xl font-bold mb-4">Writing Pad</h1>
        <hr />
        <h2 className="my-4">Write letter: {currentLetter}</h2>
        <div className="flex flex-col my-4 items-center">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            onTouchStart={(e) => startDrawing(e)}
            onTouchEnd={finishDrawing}
            onTouchMove={(e) => draw(e)}
            className="border-2 border-black bg-white"
            style={{ width: '200px', height: '200px' }} // Display size
          />
        </div>
        <div className="md:text-2xl">
          {ans === currentLetter
            ? ans && "Correct 🥳"
            : ans && "Incorrect 😯"}
        </div>
        <div className="mt-4 my-5 flex-col flex sm:block gap-3 items-center sm:space-x-4">
          <button
            onClick={checkAnswer}
            className="px-4 text-sm md:text-lg py-2 bg-green-400 text-white rounded-lg shadow-md hover:bg-green-500"
          >
            Check Answer
          </button>
          <button
            onClick={clearCanvas}
            className="px-4 text-sm md:text-lg py-2 bg-red-400 text-white rounded-lg shadow-md hover:bg-red-500"
          >
            Try Again
          </button>
          <button
            onClick={resetCanvas}
            className="px-4 text-sm md:text-lg py-2 bg-blue-400 text-white rounded-lg shadow-md hover:bg-blue-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritingPad;

