import React from "react"
import Faqblock from "../Footstub/faqblock.js"
import Faqline from "../Footer/legalhead.module.css"

export default props => {
    return(
       
<div>
<ul style={{listStyle: "none", margin:"0px"}}>
            
            { props.arraycontent.map((ele)=>(
                <li style={{marginTop:`5px`}}>
            <Faqblock topichead={ele.topichead} content={ele.content} to={ele.to} extend={ele.extend}/>
            <div>
            
        </div>
            </li>
           
            
        ))}
            
        </ul>


</div>
    
    
    
    )
    }