import React, { useState } from 'react'
import './Header.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [isOpened, setIsOpened] = useState(false)
  

  return (
    <header className='px'>
        <div className="l-header">
            <Link to="./"><p><span className='meca'>mecá</span><span>nico</span></p></Link>
        </div>
        <div className={isOpened ? 'mobile-nav' : 'r-header'}>
            <ul>
                <NavLink to="./Individuals"><li>Individuals</li></NavLink>
                <li><a href="">Professionals</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Marketplace</a></li>
            </ul>
        </div>
        
        
        {isOpened ? <IoMdClose className='hamburger' size={25} onClick={() => setIsOpened(!isOpened)} /> : <RxHamburgerMenu className='hamburger' size={25} onClick={() => setIsOpened(!isOpened)} />}
    
    </header>
    
  )
}

export default Header