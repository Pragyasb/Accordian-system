import Accordian from "./Accordian";
import { data } from "./AccordianData";
import "./Accordian.css"
import { useState } from "react";
const AccordianContainer =() =>{
   const[show,setShow] = useState(null);
    return(
      <div className="main-container">
        {
            data?.map((item)=>{
                return(
                    <Accordian
                    title={item.title}
                    description={item.description}
                    id ={item.id}
                    show = {show === item?.id}
                    setShow = {setShow}
                    
                     />
                )
            })
        }
      </div>
    )
}
export default AccordianContainer;