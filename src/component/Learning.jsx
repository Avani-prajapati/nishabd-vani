import {React,useContext,useEffect} from 'react'
import Learning1 from './Learning1'
import { signin } from '../context/CreateContext';

export default function Learning() {
  const [sign,setSign] = useContext(signin);
  useEffect(() => {
    setSign(true);
  }, [setSign]);
  return (
    <>
    <Learning1></Learning1>
    </>
  )
}
