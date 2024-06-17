import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import './Alternate.css'

const Addtask = () => {
    
    const dispatch = useDispatch();
    const [task_name,setname] = useState('');
    let count=0;
    function update(){
      if(task_name){
        dispatch({type:'Add_task',payload:task_name})
        count++;
      }
      else{
        alert('Write task first!!');
      }
    }

  return (
    <div style={{backgroundColor:"peachpuff",borderRadius:"10px",height:"150px",placeContent:"center",marginBottom:"20px"}}>
      <h2>Add your tasks here : </h2>
      <input style={{padding:"13px",borderRadius:"5px"}} type="text" onChange={(e)=>{
        setname(e.target.value)
      }} placeholder='Enter your task' />
      <button style={{borderRadius:"5px",backgroundColor:"green",color:"white",marginLeft:"10px"}} onClick={update}>Add</button>
    </div>
  )
}

export default Addtask
