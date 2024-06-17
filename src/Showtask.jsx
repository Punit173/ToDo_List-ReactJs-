import React from 'react'
import { useSelector } from 'react-redux'
import Temp from './Temp';

const Showtask = () => {
    const infor = useSelector((state)=>state);
    let count=0;
    const tasklist = infor.tasks.map((e)=>{
        count++;
        return <Temp key={e.id} task={e} number={count}/>
    })
  return (
    <div>
      {tasklist}
    </div>
  )
}

export default Showtask
