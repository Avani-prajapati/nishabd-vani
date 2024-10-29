import React, { useContext } from 'react'
import  Navbar  from "./component/Navbar"
import  Carousel  from './component/Carousel'
import Question from './component/Question'
import SectionsDiv from './component/SectionsDiv'
import { signin } from './context/CreateContext'

export default function Home() {

  return (
    <div className='md:px-8 '>  
     <Carousel></Carousel>
     <SectionsDiv></SectionsDiv>
     <hr></hr>
     <Question></Question>
  </div>
  )
}
