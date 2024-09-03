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

  return (
    <div className='flex flex-col justify-center items-center p-5'>
      <button onClick={handleClick}>back</button>

      <input
        type='text'
        value={word}
        onChange={handleInputChange}
        placeholder='Enter text to convert to sign'
        className='border p-2 mt-4'
      />

      <button onClick={generateSignImage} className='mt-4 p-2 bg-blue-500 text-white'>
        Convert to Sign Image
      </button>
      
      {signImage && (
        <div className='mt-4 p-2 border'>
          <img src={signImage} className='size-96'></img>
        </div>
      )}
    </div>
  );
}
