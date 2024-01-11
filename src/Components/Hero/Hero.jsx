import React, { useEffect } from 'react'
import './Hero.css'
import ServiceInput from '../ServicesInput/ServiceInput'
import ManOnCall from '/src/assets/man-on-call.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {
  useEffect(() => {
      AOS.init({duration:2000})
  }, [])
  return (
    <section className='hero '>
        <hr />
        <div className="hero-container px">
            <div className="a-l-hero p-hero" data-aos="fade-up">
              <div className='l-hero'>
                <h1>Unleashing Seamless Auto Solutions!</h1>
                <p>Schedule your vehicle service and repair. Connect with tested and trusted professionals and technicians. Buy quality and affordable car parts.</p>

              </div>
              <div>
                <ServiceInput />
              </div>
                
            </div>
            <div className="r-hero p-hero" data-aos="zoom-out">
                <img src={ManOnCall} alt="" />
                     
            </div>

        </div>
        
    </section>
  )
}

export default Hero