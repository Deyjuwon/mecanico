import React from 'react'
import Mechanic from '/src/assets/black-mech_thumbnail.png'

const HeroIndividual = () => {
  return (
    <section className='hero '>
 
        <div className="hero-container px">
            <div className="a-l-hero p-hero" data-aos="fade-right">
              <div className='l-hero'>
                <h1>Connect more with customers, Manage requests & Increase your earnings</h1>

              </div>
                
            </div>
            <div className="r-hero p-hero" data-aos="zoom-in">
                <img src={Mechanic} alt="" />
                     
            </div>

        </div>
        
    </section>
  )
}

export default HeroIndividual