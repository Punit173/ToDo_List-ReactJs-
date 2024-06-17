import React from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const info = useSelector((state)=>state);
  return (
    <div style={{display:"flex",backgroundColor:"black",borderRadius:"10px",color:"white",height:"80px",padding:"10px",marginBottom:"20px",placeContent:"center",placeItems:"center"}}>
      <h1>Redux - ToDo List : {info.tasks.length} Tasks</h1>
    </div>
  )
}

export default Navbar
