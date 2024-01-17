import React, { useState } from 'react'
import './Copyright.css'

const Copyright = () => {
    const [currentYear] = useState(new Date().getFullYear());
    

  return (
    <div className='copyright'>
        <p>
        Copyright © {currentYear} Adejuwon Oshindoro
        </p>
    </div>
  )
}

export default Copyright