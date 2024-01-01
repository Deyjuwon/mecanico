import React from 'react'
import './Hero.css'
import ServiceInput from '../ServicesInput/ServiceInput'


const Hero = () => {
  return (
    <section className='hero px'>
        <hr />
        <div className="hero-container">
            <div className="l-hero p-hero">
                <h1>Unleashing Seamless Auto Solutions!</h1>
                <p>Schedule your vehicle service and repair. Connect with tested and trusted professionals and technicians. Buy quality and affordable car parts.</p>
                <ServiceInput />
            </div>
            <div className="r-hero p-hero">
                <img src="../src/assets/man-on-call.png" alt="" />
                
            </div>

        </div>
        
    </section>
  )
}

export default Hero