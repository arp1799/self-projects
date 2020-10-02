import React from "react"
import Pagebox from  "../components/Footer/pagebox.module.css"
import Legalheader from "../components/Footstub/legalHeader.js"
import Footer from "../components/FooterMain/Footer.js"
import Footst from "../components/Footer/help.module.css"
import Faqs from "../components/Footstub/faqQuestion.js"
import Legals from "../components/Footstub/legalquestions.js"


export default () => {    
        const [view, setView] = React.useState("faq")
        return(

<div>
    <Legalheader heading={"HELP & SUPPORT"}/>
   
    <div className={Pagebox.container}>
    <div style={{minHeight:`550px`,margin:`50px`}}>
       <div >
            <h3>HELP AND SUPPORT</h3>   
            <p>Let's take a step ahead and help you better.</p>        
        </div> 
        <div style={{marginTop:`50px`}} className={Footst.gridContainer}>
             <div>
                <ul style={{listStyle: "none", margin:"0px"}}>
<li className={Footst.sidebar} style={{marginBottom:`50px`,marginTop:`30px`,fontSize:`19px`}}><button style={{fontSize:`16px`,padding:`10px`,border:`none`,width:`130px`}} onClick={() => setView("faq")}>LEGAL</button></li>
 <li className={Footst.sidebar} style={{fontSize:`19px`}}><button style={{fontSize:`16px`,padding:`10px`,border:`none`,width:`130px`}} onClick={() => setView("legal")}>HELP</button></li>
                </ul>
             </div>

             <div className={Footst.gridItem}>
             {view === "faq" && <Faqs />}
             {view === "legal" && <Legals />}
             </div>
        </div>     




    </div>
    </div>
    <Footer/>
</div>
        )
}