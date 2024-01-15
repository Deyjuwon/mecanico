import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='px'>
      <div className='ft ft-1'>
        <p><span>mecá</span><span>nico</span></p>
      </div>
      <div className='ft ft-2'>
        <ul>
          <li><a href="">Individuals</a></li>
          <li><a href="">Professionals</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Marketplace</a></li>
          <li><a href="">Policy</a></li>
        </ul>

      </div>
      <div className='ft ft-3'>
        <p>hello@mecanico.com</p>
        <p>+234 807 7727 941</p>
        <p>No 4, Adeola Odeku, <br />Victoria Island, <br />Lagos State.</p>

      </div>
    </footer>
  )
}

export default Footer