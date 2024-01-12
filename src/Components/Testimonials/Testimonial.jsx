import React from 'react'
import './Testimonial.css'
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import testimonials from '../testimonials.js'

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
        <h1>What mecanico users are saying</h1>
        <div>
            {testimonials.map((testimonial) => 
            <TestimonialCard key={testimonial.id} name={testimonial.name}
               testimony={testimonial.testimony} />)}
        </div>
        
        

    </div>
  )
}

export default Testimonial