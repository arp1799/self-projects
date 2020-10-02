import React from "react"
import Pagebox from  "../components/Footer/pagebox.module.css"
import Legalheader from "../components/Footstub/legalHeader.js"
import Footer from "../components/FooterMain/Footer.js"


export default () => (
<div>
    <Legalheader heading={"REFUND & CANCELLATION"}/>
   <div style={{marginTop:`50px`,minHeight:`500px`}}>
<div className={Pagebox.container}>

    
    <h3>Cancellation and refund policy</h3><ol>
<li>You cannot cancel an order after it has been confirmed.</li>
<li>If you are not present at the pick-up site within a reasonable time of the arrival of our executive, are found to have provided incorrect contact or location details or an address that lies outside our serviceable area, are unresponsive to attempted communication, fail to make payment in case of Cash on Pick-Up or refuse the service being provided to you, your order will be cancelled with no possibility of refund and in case of Cash on Pick-Up, your account will be charged a cancellation fee of <strong>INR x</strong>.</li>
<li>After delivery, if any garment(s) is/are found to have been misplaced or damaged and the responsibility for said damage or misplacement has been unambiguously ascertained by the GLADS Customer Support Team as being a partner laundry’s or a delivery executive’s, GLADS will reimburse the customer for up to ten times the cost of the service performed for that/those specific garment(s) that has/have been damaged or misplaced upon the presentation of the bill(s) of sale of said garment(s), which should also mention the GSTIN of the merchant(s) from whom the garment(s) has/have been purchased.</li>
<li>If you are not present at the delivery site within a reasonable time of the arrival of our delivery executive, the package containing your garment(s) will be deposited back at the laundry service from which the package was originally picked up by our executive for delivery. Subsequent to this, GLADS holds no responsibility for the safety of your garment(s) and you may contact the relevant laundry service directly for any further action, which must be taken up at your own expense.</li>
<li>All requests for refund will take around <strong>40 days</strong> to be processed by our Customer Support Team.</li>
<li>All refunds will be processed as <strong>TBD</strong>.</li></ol>
   
    </div>
    </div>

    <Footer/>
    </div>
    
)
    

