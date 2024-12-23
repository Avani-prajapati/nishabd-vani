import React, { useState } from 'react'
import Learning2 from './Learning2';

export default function Learning1() {
  const [clicked,setClicked] = useState(false);
  const[section,setSection] = useState('');

  function handleClick(s){
    setClicked(!clicked);
    setSection(s);
  }
  return (
       <>
        {clicked?<Learning2 click={clicked} handleClick={handleClick} section={section}></Learning2>:(
        <div className="min-h-screen  flex items-center justify-center md:px-14 py-2">
          <div className="size-full  bg-white sm:p-8  rounded-md">
            
            <div className="space-y-6">
              {/* Alphabets Section */}
              <div className="p-3 rounded-md">
                <h2 className="sm:text-xl font-bold  mb-4">Alphabets</h2>
                <div className="md:flex gap-4 ">
                  <div className='w-full my-2 md:my-0 p-2 py-5 bg-blue-100 rounded-md shadow  flex flex-col justify-center items-center gap-4'>
                    <h2 className='font-semibold'>English Alphabets</h2>
                    <img src='/ImagesNV/Learning1/ABC.png' className='sm:h-32 h-28'></img>
                    <button onClick={()=>handleClick("alphabets1")} className='sm:text-xl border shadow-md p-2 bg-white hover:bg-blue-400 hover:text-white rounded  px-4'>Start Learning</button>
                  </div>
                  <div className='w-full my-2 md:my-0 p-2 py-5 bg-blue-100 rounded-md shadow  flex flex-col justify-center items-center gap-4'>
                    <h2 className='font-semibold'>Gujarati Alphabets</h2>
                    <img src='/ImagesNV/Learning1/KKhaGa.png' className='sm:h-32 h-28'></img>
                    <button onClick={()=>handleClick("alphabets2")} className='sm:text-xl border shadow-md p-2 bg-white hover:bg-blue-400 hover:text-white rounded  px-4'>Start Learning</button>
                  </div>
                  
                </div>
              </div>
              
              {/* Maths Section */}
              <div className="p-4 rounded-md  ">
                <h2 className="font-bold mb-4 sm:text-2xl">Maths</h2>
                <div className="md:flex gap-4   ">
                <div className='w-full my-2 md:my-0 p-2 py-5 bg-red-100 rounded-md shadow  flex flex-col justify-center items-center gap-4'>
                    <h2 className='font-semibold'>Numbers</h2>
                    <img src='/ImagesNV/Learning1/number.png' className='sm:h-32 h-28'></img>
                    <button onClick={()=>handleClick("maths1")} className='sm:text-xl border shadow-md p-2 bg-white hover:bg-red-400 hover:text-white rounded  px-4'>Start Learning</button>
                  </div>
                  <div className='w-full my-2 md:my-0 p-2 py-5 bg-red-100 rounded-md shadow  flex flex-col justify-center items-center gap-4'>
                    <h2 className='font-semibold'>Tables</h2>
                    <img src='/ImagesNV/Learning1/table.png' className='sm:h-32 h-28'></img>
                    <button onClick={()=>handleClick("maths2")} className='sm:text-xl border shadow-md p-2 bg-white hover:bg-red-400 hover:text-white rounded  px-4'>Start Learning</button>
                  </div>
                  <div className='w-full my-2 md:my-0 p-2 py-5 bg-red-100 rounded-md shadow  flex flex-col justify-center items-center gap-4'>
                    <h2 className='font-semibold'>ArithMetic</h2>
                    <img src='/ImagesNV/Learning1/MathsLearn.png' className='sm:h-32 h-28'></img>
                    <button onClick={()=>handleClick("maths3")} className='sm:text-xl border shadow-md p-2 bg-white hover:bg-red-400 hover:text-white rounded  px-4'>Start Learning</button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>)
        }
        </>
      );

    }
    

    

