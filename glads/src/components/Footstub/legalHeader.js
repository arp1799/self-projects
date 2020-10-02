import React from "react"
import { Link } from "gatsby"
import Help from '../images/HELP.svg'
import Logo from '../images/g.svg'
import Legal from "../Footer/legalhead.module.css"


export default props => {
return(
<div>
<div className={Legal.container}>
     
<div className={Legal.gridContainer}>
      
      <div style={{ display:`grid`,alignContent:`center`, gridTemplateColumns:`auto auto`}}><img style={{ marginRight:`15px`}} src={Logo} alt="submit" /><h3 style={{fontSize:`17px`,display:`grid`,alignContent:`center`}}>{props.heading}</h3></div>

       <Link to="/helpSupport" style={{ textShadow: `none`, backgroundImage: `none` ,display:`grid`,alignContent:`center`}}><img style={{minHeight:`25px`}} src={Help} alt="submit" /></Link>
  
</div>

    
 
</div>
<div>
    <span className={Legal.sexy_line}></span>
</div>
</div>





)
}