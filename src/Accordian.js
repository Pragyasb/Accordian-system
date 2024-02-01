import { useState } from 'react'
import './Accordian.css'
const Accordian = ({title,description,id,show,setShow}) =>{

   console.log("id",id);
  console.log("show",show)
    return(
        <div className='acc-container' onClick={()=>{show  ? setShow(null): setShow(id)}}>
            <div className='title'>
                <div>{title}</div>
                <div>{show ? "-": "+"}</div>
            </div>
            {
                 show && <p className='para'>{description}</p>
            }
        
            
        </div>
    )
}
export default Accordian