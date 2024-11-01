import {React,useContext,useEffect} from 'react'
import PracticeQuiz from './PracticeQuiz'
import PracticeHome from './PracticeHome'
import { signin } from '../context/CreateContext';


export default function Practice() {
  const [sign,setSign] = useContext(signin);
  useEffect(() => {
    setSign(true);
  }, [setSign]);
  return (
    <div className='px-8 text-2xl'>
    <PracticeHome></PracticeHome>
    </div>
  )
}
