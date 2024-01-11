import React, { useEffect } from 'react'
import './HowMecanico.css'
import Dummy from '/src/assets/dummy.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HowMecanico = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, []) 

  return (
    <div className='howMec '>
        <div className='how-header'>
            <h1 data-aos='fade-up'>How mecánico Works</h1>
            <p data-aos='fade-up'>We know scheduling car repair and maintenance can be stressful. But the truth is, it doesn't have to be. mecánico is hassle-free car repair for the modern world.</p>
        </div>
        <div className='how-steps'>
            <div className='step-l' data-aos='fade-right'>
                <img src={Dummy} alt="" />
            </div>
            <div className='step-r' data-aos='fade-left'>
                <h1>Choose or describe your service</h1>
                <p>Tell us what services you need, your maintenance interval, or describe your symptoms to request a diagnosis.</p>
            </div>
        </div>
        <div className='how-steps mid-step'>
            <div className='step-l' data-aos='fade-up'>
                <img src={Dummy} alt="" />
            </div>
            <div className='step-r' data-aos='fade-down'>
                <h1>Compare estimates and choose a shop</h1>
                <p>Compare estimates from local repair shops in the mecánico Network by distance, customer reviews, and price. All estimates include parts, labor rate and taxes.</p>
            </div>
        </div>
        <div className='how-steps '>
            <div className='step-l' data-aos='fade-right'>
                <img src={Dummy} alt="" />
            </div>
            <div className='step-r' data-aos='fade-left'>
                <h1>Schedule an appointment</h1>
                <p>Easily schedule an appointment right through your mecánico account. All services booked through mecánico are backed by our Peace-of-Mind Guarantee.</p>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default HowMecanico