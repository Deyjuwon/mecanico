import React, { useState } from 'react'
import './Header.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {

    const [isOpened, setIsOpened] = useState(false)
  

  return (
    <header className='px'>
        <div className="l-header">
            <p><span>mecá</span><span>nico</span></p>
        </div>
        <div className={isOpened ? 'mobile-nav' : 'r-header'}>
            <ul>
                <li><a href="">Individuals</a></li>
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