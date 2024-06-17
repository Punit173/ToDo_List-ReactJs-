import React from 'react'
import { useDispatch } from 'react-redux'
import './Alternate.css'
import Addtask from './Addtask'

const Temp = (Props) => {

    const dispatch = useDispatch();
    // console.log(Props.number)

    function delete_task(){
        dispatch({type:"Delete_task",payload:Props.task})
    }
    
  return (
    <div style={{display:"flex",gap:"5vw",justifyContent:"center",alignItems:"center",backgroundColor:"grey",padding:"20px",color:"white"}}>
      <h3 style={{display:"flex",justifyContent:"center",width:"300px",padding:"20px",borderRadius:"5px"}} className={`${(Props.number % 2 === 0) ? 'light' : 'dark'}`}>{Props.task}</h3>
      <button onClick={delete_task} style={{backgroundColor:"red" , height:"45px",color:"white"}}>Delete</button>
    </div>


)
}

export default Temp
