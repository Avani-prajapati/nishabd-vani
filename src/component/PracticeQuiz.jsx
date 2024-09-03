import { useEffect, useRef, useState } from "react"
import axios from "axios"
export default function PracticeQuiz(){
     let [index,setIndex] = useState(0);
     const [lock,setLock] = useState(false)
     let [score,setScore]= useState(0);
     let [result,setResult]=useState(false);
     let [Data,setData]=useState([
        {
            question: "ગુજરાતીમાં 'મમ્મી' શબ્દનો સંકેત કેવી રીતે કરવો?",
            op1: " હાથ હલાવવો (Wave hand)",
            op2: " મોં ઉપર હાથ મૂકવો (Place hand over mouth)",
            op3: "બાજુના ગાલ પર હાથ રાખવો (Place hand on the side of the cheek)",
            op4: "હૃદય પર હાથ રાખવો (Place hand on the heart)",
            ans: 3
        },
        {
            question: "'હું' માટેની સંકેત કેવો છે?",
            op1: "હાથ ઉપર ઉઠાવવો (Raise hand upwards)",
            op2: "છાતી પર આંગળીથી ઈશારો કરવો (Point to the chest with a finger)",
            op3: " પગ નીચે રાખવો (Place leg down)",
            op4: "હાથના આંગળીઓને ઘસવા (Rub fingers together)",
            ans: 2
        },
        {
            question: "'પાણી' શબ્દનો સંકેત શું છે?",
            op1: "હાથને મોં તરફ લાવવો (Bring hand to the mouth)",
            op2: " આંગળીથી હવામાં લખવું (Write in the air with a finger)",
            op3: "પગ હલાવવો (Move leg)",
            op4: " હાથને ઢીલો મૂકવો (Leave hand relaxed)",
            ans: 1
        },
        {
            question: "'શુભપ્રભાત' માટે શું સંકેત કરવો?",
            op1: " બંને હાથ ઝૂલાવવો (Swing both hands)",
            op2: "હાથ ઊંચા કરવી (Raise hands)",
            op3: "મુઠ્ઠી બાંધવી (Make a fist)",
            op4: "હાથને કપાળ તરફ લાવવો અને આગળ હલાવવો (Bring hand to forehead and move forward)",
            ans: 4
        }
    ])
    const [que,setQue] = useState(Data[index])
    let [choise,setChoise] = useState("Quiz");

     let op1=useRef(null);
     let op2=useRef(null);
     let op3=useRef(null);
     let op4=useRef(null);
     const opArray=[op1,op2,op3,op4]
   
    //  function RadioClick(e){
    //   setChoise(choise=e.target.title)
    //   if(choise==="Mongo"){
    //    axios.get("http://localhost:8080/mongo")
    //    .then(res=>{console.log(res.data)
    //    setData(Data=res.data)
    //    setQue(Data[index])
  
    //   })
    //   .catch(err => console.log(err))
    //   }
    //   else if(choise==="Express"){
    //     axios.get("http://localhost:8080/express")
    //  .then(res =>{ console.log(res.data)
    //    setData(Data=res.data)
    //   setQue(Data[index])
    //   })
    //   .catch(err => console.log(err))
    //   }
    //   else if(choise==="React"){
    //     axios.get("http://localhost:8080/react")
    //     .then(res=>{console.log(res.data)
    //     setData(Data=res.data)
    //     setQue(Data[index])
    //    })
    //    .catch(err => console.log(err))
    //   }
    //   else {
    //     axios.get("http://localhost:8080/node")
    //    .then(res=>{console.log(res.data)
    //    setData(Data=res.data)
    //    setQue(Data[index])
    //   })
    //   .catch(err => console.log(err))

    //   }
    //   setIndex(0)
    //   setLock(false)
    //   setScore(0)
    //   setResult(false)
    //   opArray.map((op)=>{
    //     op.current.classList.remove("wrong")
    //     op.current.classList.remove("correct")
    //     return null})

       
    //  }
     
     function checkAns(e,ans){
        if(lock!=true){
            if(ans==que.ans){
                e.target.classList.add("correct")
                setScore(++score)
               }
               else{
                e.target.classList.add("wrong")
                opArray[que.ans-1].current.classList.add("correct")
               }
           setLock(true);    
        }
         
     }
      
     function nextClick(){
        if(lock){
            if(index === Data.length-1){
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQue(Data[index]);
            setLock(false);
            opArray.map((op)=>{
                op.current.classList.remove("wrong")
                op.current.classList.remove("correct")
                return null;
            })
        }
     
     }
     function resetClick(){
        setIndex(index=0);
        setQue(Data[0])
        setLock(false)
        setScore(0);
        setResult(false);
     }
   

    return (
        <div className=" bg-blue-100 bg-gradient p-4 my-6 md:m-6 h-auto " >
        <div className=" p-3 continer d-flex flex-column items-center justify-center">
            <div className="container mt-5 flex justify-center flex-wrap gap-3 mx-2 p-2 shadow bg-slate-50 rounded-3 w-50 text-wrap" >
            </div>
          <div className="mt-2 mx-2 p-3 shadow-lg bg-slate-50 rounded-3 text-wrap text-clip basis-1/2" style={{height:"fit-content"}}>
            {choise == null?<div className="text-center flex flex-col gap-2 items-center justify-center h-screen w-screen" >Choose option in above</div>:<><h2 className="text-center font-semibold my-2">{choise} question</h2>
            <hr className="w-full"></hr>
            {result?<div className="text-center flex flex-col gap-2 items-center justify-center h-52 w-full"><div className="text-2xl">
                You scored {score} out of {Data.length}
                </div>
                <button onClick={resetClick} className="bg-blue-400  m-2 rounded curser-pointer text-white p-1 px-4">Try again</button>
                </div>:<>      <h4 className="text-start"> {index+1}.  {que.question} </h4>
            <ul className="_testUl break-words">
                <li ref={op1} onClick={(e)=>{checkAns(e,1)}}>{que.op1}</li>
                <li ref={op2} onClick={(e)=>{checkAns(e,2)}}>{que.op2}</li>
                <li ref={op3} onClick={(e)=>{checkAns(e,3)}}>{que.op3}</li>
                <li ref={op4} onClick={(e)=>{checkAns(e,4)}}>{que.op4}</li>
            </ul>
            <div className="text-center">

            <button className="bg-blue-400 m-2 rounded curser-pointer text-white p-1 px-4" onClick={nextClick}>Next</button>
            </div>
            <h6 className="text-center">{index+1} of {Data.length} question</h6></>}</>}
          </div>
        </div>
        </div>
    )
    }