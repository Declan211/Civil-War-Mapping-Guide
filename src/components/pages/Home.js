import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection.js';
import '../../index.css'
import Armies from '../Armies.js'
import '../Armies.css'



function Home() {
    return (
    <>    
   <div className='hero-section'>
    <HeroSection />
   </div>

   <div className='armies'>
    <Armies />
   </div>
    </>
    )
}
export default Home;