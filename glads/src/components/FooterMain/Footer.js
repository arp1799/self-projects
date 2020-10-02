/* eslint-disable */ 
import React from "react"
import Footsub from "../Footstub/footstub.js"
import Footsty from "../Footer/footer.module.css"
import Google from "../images/android.jpg"
import Apple from "../images/apple.png"
import Logo from '../images/g.svg'
import Flogo from '../images/glads.svg'
import SO1 from '../images/social.png'
import S02 from '../images/social2.png'
import SO3 from '../images/social3.png'
import SO4 from '../images/social4.png'

export default () => (

 <div className={Footsty.container}>
    <div className={Footsty.gridContainer}>
  <div className={Footsty.gridItem}>
            <Footsub heading="COMPANY" arraycontent={[{
                to:"/aboutus",
                display: "About Us"
            },

            {
                to:"/team",
                display: "Team"
            },

            {
                to:"/career",
                display: "Career"
            }
        ]} />
</div>


<div className={Footsty.gridItem}>
  <Footsub heading="CONTACT" arraycontent={[{
                to:"/faq",
                display: "Help & Support"
            },

            {
                to:"/partnerWithUs",
                display: "Partner With Us"
            },

            {
                to:"/rideWithUs",
                display: "Ride With Us"
            }
        ]} />
  </div>
  <div className={Footsty.gridItem}>
  <Footsub heading="LEGAL" arraycontent={[{
                to:"/termsConditions",
                display: "Terms & Conditions"
            },

            {
                to:"/refundAndCancellation",
                display: "Refund & Cancellation"
            },

            {
                to:"/privacyPolicy",
                display: "Privacy Policy"
            }
        ]} />
  </div>
  <div style={{display:`grid`, alignContent:`center`}} className={Footsty.gridItem}><div><img style={{maxWidth:`200px`}} src={Google} alt="success" /></div><div><img style={{maxWidth:`200px`, minWidth:`200px`}} src={Apple} alt="success" /></div></div>
</div>

<div>
    <span class={Footsty.sexy_line}></span>
</div>


            <div className={Footsty.gridContainer1}>
                <div className={Footsty.gridItem}>
                        <div style={{display:`grid`,alignContent:`center`,gridTemplateColumns:`auto auto`}}><img src={Logo} alt="success" /><img style={{maxWidth:`150px`}} src={Flogo} alt="success" /></div>
                </div>
                <div className={Footsty.gridItem}>
                <div style={{fontSize:`20px`}} >&copy;2019 GLADS</div>
                </div>
                <div className={Footsty.gridItem}>
                    <div style={{display:`grid`,alignContent:`center`,gridTemplateColumns:`auto auto auto auto`}} className={Footsty.social}>
                        <a style={{marginRight:`2px`}} href="#"><img style={{maxWidth:`40px`,minWidth:`40px`,maxHeight:`40px`,minHeight:`40px`}} src={SO1} alt="social" /></a>
                        <a style={{marginRight:`2px`}} href="#"><img style={{maxWidth:`40px`,minWidth:`40px`,maxHeight:`40px`,minHeight:`40px`}} src={S02} alt="social" /></a>
                        <a style={{marginRight:`2px`}} href="#"><img style={{maxWidth:`60px`,minWidth:`60px`,maxHeight:`40px`,minHeight:`40px`}} src={SO3} alt="social" /></a>
                        <a style={{marginRight:`2px`}} href="#"><img style={{maxWidth:`40px`,minWidth:`40px`,maxHeight:`40px`,minHeight:`40px`}} src={SO4} alt="social" /></a>

                    </div>
                </div>
            </div>



</div>
    
)
