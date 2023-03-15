import React from "react";
import "./Header.sass";

export default function Index() {
    return (
        <div className='header'>
            <div className='headerBlock'>
                <div className='headerBlockText'>
                <p className='Noni'>Noni</p>
                <div className='navigation'>
                    <p className='navigationText'>Home</p>
                    <p className='navigationText'>Why us?</p>
                    <p className='navigationText'>Reviews</p>
                    <p className='navigationText'>Issues</p>
                    <p className='navigationText'>Contact</p>
                </div>
                </div>
                <div className='logoMessenger'>
                    <div> <img src='/gallery/facebook.svg' alt=''/> </div>
                    <div> <img src='/gallery/twitter.svg' alt=''/> </div>
                    <div> <img src='/gallery/linkedin.svg' alt=''/> </div>
                </div>
            </div>
        </div>
    )
}