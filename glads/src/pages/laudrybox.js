import React from "react"
import Lbox from "../components/Footer/laundrybox.module.css"
import s1 from '../components/images/su1.png'

export default()=>(
    <div className={Lbox.mainbox}>
    <div className={Lbox.img}><img className={Lbox.laundryimage} src={s1} alt="submit" /></div>
        
    <div className={Lbox.uppersection}>
        <h1>laundry head</h1>
        <p>loreum ipsumd it will include laundry important details.</p>

    </div>

    <div className={Lbox.lowersection}>
        
        <h4 style={{display:`inline`, marginRight:`20px`}}>Rating:4ss</h4>
        <p style={{display:`inline`, marginRight:`20px`}}>39 mins</p>
        <p style={{display:`inline`}}>approx cost</p>
        <hr></hr>
        <button>explore</button>

    </div>

    </div>
)