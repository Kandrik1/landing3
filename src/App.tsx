import React from 'react';
import './App.sass';
export default function App() {


  return (
      <div className='base'>
          <div className='block'>
              <div className='case'>
                  <img src='/gallery/logo.svg' alt='' />
                  <h1 className='heading'>Case study template</h1>
                  <p className='text'>A <span className='colorText'>simple case study template</span> used to create case study PDF files for use on cheniecemanning.com. This template uses examples from the Brainy Bugs project. <span className='colorText'>To use, replace images and text with your own.</span></p>
                  <p className='link'>Made with 💛 by <a className='colorText' href='https://www.cheniecemanning.com/home'>www.cheniecemanning.com</a></p>
              </div>
              <div className='picture'>
                  <img src='/gallery/brooch.svg' alt=''/>
              </div>
          </div>
      </div>
  )
}