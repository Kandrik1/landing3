import React from "react";
import "./SubscribeEnd.sass";


export default function Index() {
    return (
        <div className='SubscribeEnd'>
            <div className='SubscribeEndBlock'>
                <h1 className='SubscribeEndHeading'>Subscribe</h1>
                <p className="SubscribeEndText">Yay! You made it to the end. Means you like what we do.</p>
            </div>
            <div className='alfaBlock'>
                <input placeholder='Enter your email address'/>
                <div className='button'> <p className='buttonText'>Subscribe</p> </div>
            </div>
        </div>
    )
}