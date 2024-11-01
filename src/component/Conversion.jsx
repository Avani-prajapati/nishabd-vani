import {React,useContext,useEffect} from 'react'
import WebcamStream from "../WebcamStream"
import Conversion1 from './Conversion1'
import { signin,userContext } from '../context/CreateContext';

export default function Conversion() {
  const [sign,setSign] = useContext(signin);
  const [user,setUser] = useContext(userContext);

  useEffect(() => {
    setSign(true);
  }, [setSign]);

  return (
    <>
    {user === null? 
    (<Conversion1></Conversion1>):
    (
    <div className='flex flex-col justify-center items-center h-[30rem]'>
      <img src='/ImagesNV/pf.jpeg' className='h-40 w-44 '></img>
      <h1>
        Sign in for use this features
      </h1>
      <a href='/signin' className='text-blue-600'>
       Sign in
      </a>
    </div>)
    }
   
    </>
  )
}
