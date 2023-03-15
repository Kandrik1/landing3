import React from "react";
import "./Landing.sass";
import SubscribeSection from './components/SubscribeSection'
import Header from '../../components/Header'
import AnnotationSection from './components/AnnotationSection'
import SubscribeEnd from './components/SubscribeEnd'
import Footer from '../../components/Footer'


export default function Index() {
  return (
    <div className='wrapper'>
      <div> <Header/> </div>
      <div> <SubscribeSection/> </div>
      <div className='blockComment'>
          <p className='comment'>I subscribed to this newsletter because I heard it's really <br/> creative. The last thing I want is for my inbox to be cluttered <br/> with the same old stuff. Every day when I open my email, I find something new and exciting in Noni's emails. You name it, they mention it in their newsletter!</p>
          <p className='customers'><span>- Shambhavi Mishra,</span> Cutest girl on the planet</p>
      </div>
        <div> <AnnotationSection/> </div>
        <div> <SubscribeEnd/> </div>
        <div> <Footer/> </div>
    </div>
  )
}
