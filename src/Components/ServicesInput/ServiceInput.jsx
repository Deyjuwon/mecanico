import React from 'react'
import './ServiceInput.css'


const ServiceInput = () => {
  return (
    <form className='serviceForm' action="">
        <input className='serviceInput' type="text" placeholder='Search Services' />
        <button type="submit" className='serviceBtn'>Get Estimate</button>
     
    </form>
  )
}

export default ServiceInput
