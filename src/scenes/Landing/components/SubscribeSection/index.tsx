import React from "react";
import "./SubscribeSection.sass";

export default function Index() {
    return (
        <div className='sceneOne'>
        <div className='blockOne'>
            <div className='alfa'>
                <h1 className='alfaHeading'>The Most Quirky Writings <br/> Delivered Right To Your Inbox</h1>
                <div className='alfaBlock'>
                    <input placeholder='Enter your email address'/>
                    <div className='button'> <p className='buttonText'>Subscribe</p> </div>
                </div>
            </div>
            <div className='logoNames'>
                <img src='/gallery/rpaia.svg' alt=''/>
                <img src='/gallery/etos.svg' alt=''/>
                <img src='/gallery/dailyNews.svg' alt=''/>
                <img src='/gallery/olga.svg' alt=''/>
            </div>
        </div>
        </div>
    )
}
