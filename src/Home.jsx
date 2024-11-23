import React, { useContext,useEffect } from 'react'
import  Navbar  from "./component/Navbar"
import  Carousel  from './component/Carousel'
import Question from './component/Question'
import SectionsDiv from './component/SectionsDiv'
import { signin } from './context/CreateContext'

export default function Home() {
 const [sign,setSign] = useContext(signin);

 useEffect(() => {
  setSign(true);
}, [setSign]);

  return (
    <div className='md:px-8 min-h-screen '>  
     <Carousel></Carousel>
     <SectionsDiv></SectionsDiv>
     <hr></hr>
     <Question></Question>
  </div>
  )
}
