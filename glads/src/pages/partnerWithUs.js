/* eslint-disable */ 
import React from "react"
import Pagebox from  "../components/Footer/pagebox.module.css"
import Partner from "../components/Footer/partner.module.css"
import Legalheader from "../components/Footstub/legalHeader.js"
import s1 from '../components/images/su1.png'
import s2 from '../components/images/su2.png'
import s3 from '../components/images/su3.png'
import s4 from '../components/images/su4.png'
import C1 from '../components/images/c1.png'
import C2 from '../components/images/c2.png'
import C3 from '../components/images/c3.png'
import Benifit from '../components/images/keybenifits.png'
import Footer from "../components/FooterMain/Footer.js"

export default () => (
   

<div>
<Legalheader heading="PARTNER WITH US"/>
<div className={Partner.bg}>

<div className={Pagebox.container}>
<div className={Partner.form}>
<div className="typeform-widget" data-url="https://arpit1799.typeform.com/to/qYRRsa" style={{width: "400px", height: "600px"}}></div> 
{ (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() }
<div style={{fontFamily: "Sans-Serif",fontSize: "12px",color: "#999",opacity: 0.5, paddingTop: "5px"}}>  <a href={"https://admin.typeform.com/signup?utm_campaign=qYRRsa&utm_source=typeform.com-13927985-Basic&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN"} style={{color: "#999"}} target="_blank"></a> </div>
</div>
</div>

</div>

<div>
    <div className={Partner.listed}>
        <h2>GET LISTED ON INDIA’S LEADING ONLINE</h2><h2>LAUNDRY DELIVERY MARKETPLACE TODAY</h2>
        <div className={Partner.gridContainer}>
        <div className={Partner.gridItem}><img src={s1} alt="submit" /></div>
        <div className={Partner.gridItem}><img src={s2} alt="submit" /></div>
        <div className={Partner.gridItem}><img src={s3} alt="submit" /></div>
        <div className={Partner.gridItem}><img src={s4} alt="submit" /></div>
        </div>
        <button style={{fontSize:`16px`,padding:`14px 40px`,backgroundColor:`rgba(255, 56, 6, 0.8)`, textDecoration:`none`,textAlign:`center`,display:`inline-block`}} >REGISTER NOW</button>
    </div>
</div>
<div className={Partner.key}>

    <div className={Partner.liste}>
        <h1>KEY BENIFITS</h1>
        </div>
        <div style={{display:`grid`,alignContent:`center`}}>
        <img  className={Partner.keyima} src={Benifit} alt="Key Benifits" />
        
        </div>



</div>
<div className={Pagebox.container}>
 <div className={Partner.listed}>
        <h2>OUR SUCCESS IS YOUR SUCCESS</h2>
        <div className={Partner.gridContainer1}>
        <div className={Partner.gridItem}><div className={Partner.imga}><img src={C1} alt="success" /></div><div className={Partner.sutext}>Many customers on Glads and still growing</div></div>
        <div className={Partner.gridItem}><div className={Partner.imga}><img src={C2} alt="success" /></div><div className={Partner.sutext}>Presence across many cities and still expanding</div></div>
        <div className={Partner.gridItem}><div className={Partner.imga}><img src={C3} alt="success" /></div><div className={Partner.sutext}>Many Laundries on Glads and still increasing</div></div>
        
        </div> 
        </div>
        </div>

<Footer/>



</div>

)