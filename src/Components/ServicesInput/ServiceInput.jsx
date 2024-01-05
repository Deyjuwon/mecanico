import React, { useState } from 'react'
import './ServiceInput.css'
import { CiSearch } from "react-icons/ci";


const ServiceInput = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <form className='serviceForm' action="">
      <div className='serviceFormTop'>
        <input className='serviceInput' type="text" placeholder='Search Services' onClick={toggleDropdown} />

        <button type="submit" className='serviceBtn'>Get Estimate</button>
        <CiSearch className='searchIcon' size={26} />

      </div>
        

        {isDropdownOpen && (
        <div className='serviceDD'>
          <ul>
            <li>Oil Change</li>
            <li>Brake Pads</li>
            <li>Wheel Alignment</li>
            <li>A/C Diagnosis</li>
            <li>Brake Fluid</li>
            <li>Transmission Flush</li>
            <li>General Diagnosis</li>
          </ul>
        </div>
      )}
     
    </form>
  )
}

export default ServiceInput
