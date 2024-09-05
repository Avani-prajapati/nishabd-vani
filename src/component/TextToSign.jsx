import React, { useState } from 'react';
import axios from 'axios';

export default function TextToSign({ handleClick }) {
  const [word, setWord] = useState('');
  const [signImage, setSignImage] = useState(null);
  const [error,setError] = useState(null);

  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const generateSignImage = () => {
    axios.post( "http://localhost:5000/conversion",{word})
    .then(res => { setSignImage(res.data.cloud_location);
      console.log(res);
      setWord('');
    }).catch(err=>{setError(err)})
  };

  const Click = ()=>{
     setSignImage(null);
  }
   
  return (
    <div className='flex flex-col justify-center items-center p-5'>
      <div className='flex md:justify-between md:w-96 w-screen justify-between px-4'>
       <button onClick={handleClick} className='font-bold'>Back</button>  
       <button onClick={Click} className='font-bold'>Stop</button>
      </div>

      <input
        type='text'
        value={word}
        onChange={handleInputChange}
        placeholder='Enter text to convert to sign'
        className='border p-2 mt-4 text-center'
      />

      <button onClick={generateSignImage} className='mt-4 p-2 bg-blue-500 text-white'>
        Convert to Sign Image
      </button>
      
      {signImage ? (
        <div className='mt-4 p-2 border'>
          <img src={signImage} className='size-96 w-screen md:w-96'></img>
        </div>
      ):<div className='mt-4 p-2 border'>
        <div className='shadow-md flex flex-row justify-center items-center border size-96 sm:w-96 w-auto px-10 text-center '>
         Result will be genrate here..
        </div>
    </div>}
    </div>
  );
}
