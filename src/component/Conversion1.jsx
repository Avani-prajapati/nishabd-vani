import React, { useEffect, useState } from 'react'
import WebcamStream from '../WebcamStream';
import TextToSign from './TextToSign';

export default function Conversion1({isopen}) {
    const [isOpen,setIsOpen] = useState(isopen);
    const[signToText,setIsSignToText] = useState(true);

    function handleClick (){
        setIsOpen(!isOpen);
    }
    function handleClick2(a){
        setIsOpen(!isOpen);
        setIsSignToText(a);
    }
  return (
    <>
    {isOpen?<>{signToText?<WebcamStream handleClick={handleClick}></WebcamStream>:<TextToSign handleClick={handleClick}></TextToSign>}</>:
    <div className=" p-4 md:flex  md:mx-12 mt-5 h-auto px-8 gap-20">
        <div className='shadow-md p-8 flex flex-col gap-5 basis-1/2 md:m-0 my-5'>
            <h1 className='font-bold'>
               Text to Sign
            </h1>
            <div>
               <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni.</h3>    
            </div>
            <div className='  bg-blue-100 text-center p-2 rounded'>
                start learning  
            </div>
            <div className='flex justify-center'>
            <img src='/ImagesNV/Conversion1/texttosign.gif' className=" size-44">
            </img>
            </div>
            <button className=' p-2 bg-blue-600 text-white rounded' onClick={()=>handleClick2(false)}>
               click here to start
            </button>
        </div>
        <div className='shadow-md p-8 flex flex-col gap-5 basis-1/2'>
            <h1 className='font-bold'>
               Sign to Text
            </h1>
            <div>
               <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni.</h3>    
            </div>
            <div className='bg-blue-100  text-center p-2 rounded-md'>
                start learning
            </div>
            <div className='flex justify-center'>
            <img src='/ImagesNV/Conversion1/signtotext.gif' className=" size-44">
            </img>
            </div>
            <button className='p-2 bg-blue-600 text-white rounded ' onClick={()=>handleClick2(true)}>
               click here to start
            </button>
        </div>
    </div>}
    </>
  )
}