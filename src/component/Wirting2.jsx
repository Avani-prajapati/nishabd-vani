// import axios from 'axios';
// import React, { useRef, useState, useEffect } from 'react';

// const Writing2 = () => {
//   const canvasRef = useRef(null);
//   const contextRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [ans,setans] = useState(null)

//   const data=[
//     'ક','ળ','ણ', 'ઘ','પ', 'છ'
//   ]
//   const [index,setIndex] = useState(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     // Set the internal canvas size to match the display size
//     canvas.width = 200; 
//     canvas.height = 200;
//     canvas.style.width = '200px';  // Scaled display size
//     canvas.style.height = '200px';

//     const context = canvas.getContext('2d');
//     context.lineCap = 'round';
//     context.strokeStyle = '#000000';
//     context.lineWidth = 8; // Adjust line width for crisp drawing
//     contextRef.current = context;
//   }, []);

//   const startDrawing = ({ nativeEvent }) => {
//     const { offsetX, offsetY } = nativeEvent;

//     contextRef.current.beginPath();
//     contextRef.current.moveTo(offsetX, offsetY);
//     setIsDrawing(true);
//   };

//   const finishDrawing = () => {
//     contextRef.current.closePath();
//     setIsDrawing(false);
//   };

//   const draw = ({ nativeEvent }) => {
//     if (!isDrawing) return;

//     const { offsetX, offsetY } = nativeEvent;
//     contextRef.current.lineTo(offsetX, offsetY);
//     contextRef.current.stroke();
//   };

//   const resetCanvas = () => {
//     const context = contextRef.current;
//     context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//     setans(null)
//     setIndex((index+1)%5);
//   };

//   const getPixels = () => {
//     const canvas = canvasRef.current;
//     const imageData = canvas.getContext('2d').getImageData(0, 0, 200, 200); // Full size for crisp image
//     const rawPixels = imageData.data;
//     const _pixels = [];
//     const pixels = [];

//     // Extract alpha values (every 4th value)
//     for (let i = 0; i < rawPixels.length; i += 4) {
//       _pixels.push(rawPixels[i + 3]); // Alpha value
//     }

//     // Downsample pixels from 200x200 to 50x50
//     for (let i = 0; i < _pixels.length; i += 800) { 
//       for (let j = 0; j < 200; j += 4) { 
//         pixels.push(_pixels[i + j]);
//       }
//     }

//     return pixels;
//   };

//   const addDataAction = () => {
//     const pixels = getPixels();
//     axios.post("http://localhost:5000/gujBoard", { pixels })
//       .then(res => {console.log(res.data.prediction)
//         setans(res.data.prediction)
//       })
//       .catch(error => console.error(error));
//   };

//   const practiceAction = () => {
//     const pixels = getPixels();
//     axios.post("http://localhost:5000/EngBoard", { pixels })
//       .then(res => {console.log(res)
//         setans(res.data.prediction)
//       })
//       .catch(error => console.error(error));
//   };

//   return (
//     <div className="flex flex-col items-center  h-screen p-4">
//         <div className='w-screen mb-8 bg-red-900 h-14'></div>
//       <h1 className="text-3xl font-bold mb-4">Practice Writing</h1>
//       <h2>Write letter {data[index]}</h2>
//       <div className="flex flex-col items-center">
//         <canvas
//           ref={canvasRef}
//           onMouseDown={startDrawing}
//           onMouseUp={finishDrawing}
//           onMouseMove={draw}
//           onTouchStart={(e) => startDrawing(e)}
//           onTouchEnd={finishDrawing}
//           onTouchMove={(e) => draw(e)}
//           className="border-2 border-black bg-white"
//           style={{ width: '200px', height: '200px' }} // Display size
//         />
//       </div>
//       <div className='text-2xl'>{ans == data[index]?ans&&"Correct 🥳":ans&&"Incorrect"}</div>
//       <div className="mt-4  flex sm:block gap-14 items-center sm:space-x-4">
//         <button
//           onClick={addDataAction}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
//         >
//           Cheak Ans
//         </button>
//         {/* <button
//           onClick={practiceAction}
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
//         >
//           Check My Answer
//         </button> */}
//         <button
//           onClick={resetCanvas}
//           className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600"
//         >
//           Clear
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Writing2;


