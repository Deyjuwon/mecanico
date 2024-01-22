import React, { useState } from 'react'
import './Header.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [isOpened, setIsOpened] = useState(false)
    const navItems = [
        { to: '/Individuals', label: 'Individuals' },
        { to: '/Professionals', label: 'Professionals' },
        { to: '/Services', label: 'Services' },
        { to: '/Marketplace', label: 'Marketplace' },
      ];
      
  

  return (
    <header className='px'>
        <div className="l-header">
            <Link to="/"><p><span className='meca'>mecá</span><span>nico</span></p></Link>
        </div>
        <div className={isOpened ? 'mobile-nav' : 'r-header'}>
            <ul>
                {/* <NavLink onClick={() => setIsOpened(!isOpened)} to="./Individuals"><li>Individuals</li></NavLink>
                <NavLink onClick={() => setIsOpened(!isOpened)} to="./Professionals"><li>Professionals</li></NavLink>
                <NavLink onClick={() => setIsOpened(!isOpened)} to="./Services"><li>Services</li></NavLink>
                <NavLink onClick={() => setIsOpened(!isOpened)} to="./Marketplace"><li>Marketplace</li></NavLink> */}
                {navItems.map((item, index) => (
                    <NavLink key={index} to={item.to}>
                    <li>{item.label}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
        
        
        {isOpened ? <IoMdClose className='hamburger' size={25} onClick={() => setIsOpened(!isOpened)} /> : <RxHamburgerMenu className='hamburger' size={25} onClick={() => setIsOpened(!isOpened)} />}
    
    </header>
    
  )
}

export default Header