import React from "react";
import "./Footer.sass";

export default function Index() {
    return (
        <div className='footer'>
            <div className='footerBlock'>
                <div className='footerBlockText'>
                    <p className='footerNoni'>Noni</p>
                    <div className='footerNavigation'>
                        <p className='footerNavigationText'>About</p>
                        <p className='footerNavigationText'>Team</p>
                        <p className='footerNavigationText'>Careers</p>
                        <p className='footerNavigationText'>Contact</p>
                    </div>
                </div>
                <div className='footerLogoMessenger'>
                    <div> <img src='/gallery/facebook.svg' alt=''/> </div>
                    <div> <img src='/gallery/twitter.svg' alt=''/> </div>
                    <div> <img src='/gallery/linkedin.svg' alt=''/> </div>
                </div>
            </div>
        </div>
    )
}