import React, { useEffect } from 'react'
import './Testimonial.css'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import testimonials from '../testimonials.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimonial = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <div className='testimonial-container'>
        <h1 data-aos='fade-up'>What mecánico users are saying</h1>
        <div data-aos='fade-up'>
            {testimonials.map((testimonial) => 
            <TestimonialCard key={testimonial.id} name={testimonial.name}
               testimony={testimonial.testimony} />)}
        </div>
        
        

    </div>
  )
}

export default Testimonial