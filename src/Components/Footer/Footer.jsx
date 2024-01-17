import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { CiTwitter } from 'react-icons/ci';


const Footer = () => {
  return (
    <footer className='px'>
      <div className='ft ft-1'>
        <p><span>mecá</span><span>nico</span></p>
        <div className='socials'>
          <a href="#"><FaFacebookF size={24} /></a>
          <a href="https://twitter.com/mecanico20000" target='_blank'><FaXTwitter size={24}/></a>
          <a href="#"><FaInstagramSquare size={24}/></a>
          
        </div>
        
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
        <p>No 4, Adeola Odeku,</p>
        <p>Victoria Island,</p>
        <p>Lagos State.</p>

      </div>

      
    </footer>
  
  )
}

export default Footer