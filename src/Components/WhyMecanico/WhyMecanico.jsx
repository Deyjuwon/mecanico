import React, { useEffect } from 'react'
import './WhyMecanico.css'
import { FaTools } from "react-icons/fa";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoPricetags } from "react-icons/io5";
import { RiGlobalFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

const WhyMecanico = () => {
  useEffect(() => {
      AOS.init({duration:2000})
  }, [])
  return (
    <div className='whyMec' >
      <h1 data-aos="fade-up">Why Should I Book Service Through mecánico?</h1>
      <div>
        <ul>
          <li data-aos="fade-up"><span><FaTools size={30} /></span><span>1,000s of services to select from.</span></li>
          <li data-aos="fade-up"><span><RiMoneyDollarBoxFill size={30}/></span><span>Multiple competitive price estimates to compare.</span></li>
          <li data-aos="fade-up"><span><IoPricetags size={30}/></span><span>Discounts up to 25% on automotive services.</span></li>
          <li data-aos="fade-up"><span><RiGlobalFill size={30}/></span><span>Curated automotive shop network.</span></li>
          <li data-aos="fade-up"><span><FaCalendarAlt size={30}/></span><span>Book service appointments online with confirmation.</span></li>
        </ul>
      </div>
    </div>
  )
}

export default WhyMecanico