import React from "react"
import Footlink from "../Footer/footerlink.module.css"

export default props => {
return(
    <ul style={{listStyle: "none"}}>
        <li className={Footlink.linkhead}><h4 style={{fontSize:`19px`}}>{props.heading}</h4></li>
        { props.arraycontent.map((ele)=>(
        <section>
            <li className={Footlink.links}>
            <a href={ele.to}><h5 style={{fontSize:`17px`}}>{ele.display}</h5></a>
        
            </li>
        </section>
    
    ))}
        
    </ul>



)
}