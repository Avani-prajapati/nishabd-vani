// import React, { useState, useEffect } from 'react';

// const Maths = ({num}) => {
//   const [visibleItems, setVisibleItems] = useState(0);

//   const multiplicationData = [
//     "2 * 1 = 2",
//     "2 * 2 = 4",
//     "2 * 3 = 6",
//     "2 * 4 = 8",
//     "2 * 5 = 10",
//     "2 * 6 = 12",
//     "2 * 7 = 14",
//     "2 * 8 = 16",
//     "2 * 9 = 18",
//     "2 * 10 = 20",
//   ];

//   useEffect(() => {
//     if (visibleItems < multiplicationData.length) {
//       const timer = setTimeout(() => {
//         setVisibleItems(visibleItems + 1);
//       }, 500); // Adjust the delay as per your need
//       return () => clearTimeout(timer);
//     }
//   }, [visibleItems, multiplicationData.length]);

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-white">
//       {/* Left side numbers */}
//       <div className="flex flex-col space-y-4 p-4">
//         {[2, 3, 4, 5].map((num) => (
//           <div
//             key={num}
//             className="w-16 h-16 flex items-center justify-center text-3xl font-bold bg-orange-400 rounded-lg shadow-md"
//           >
//             {num}
//           </div>
//         ))}
//       </div>

//       {/* Multiplication Table */}
//       <div className="p-10 bg-orange-300 text-white rounded-lg shadow-lg max-w-xs">
//         <h1 className="text-2xl font-bold mb-4">Multiplication Table</h1>
//         <div className="space-y-2">
//           {multiplicationData.slice(0, visibleItems).map((item, index) => (
//             <p
//               key={index}
//               className={`transition-opacity duration-500 ease-in-out ${visibleItems > index ? 'opacity-100' : 'opacity-0'}`}
//             >
//               {item}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Maths;

import React from 'react';
import { useEffect ,useState} from 'react';
import Tables from './Tables';
import Numbers from './Numbers';

const Maths = ({num}) => {

  const renderSection = () => {
    console.log(num)
     switch (num) {
       case '1' :
         return <Numbers></Numbers>;
       case '2':
         return <Tables></Tables>;
       case '3':
         return <>Arithmetic</>;
     }
   };

  return (
   <div>
   {renderSection()}
   </div>
  );
};

export default Maths;
