import React from 'react'
import './header.css'

import CTA from './CTA'
import ME from '../../assets/suitedup.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    // <div>Header</div>
    <header>
      <div className="container header__container"> 
        <h5>Hello I'm</h5>
        <h1>Austin Varghese</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img id="mypic" src={ME} alt="me" />
        </div>        
        <a href="#contact" className='scroll__down'>Scroll Down</a>

        <div className='quote'>          
          <h4>“Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn.”</h4>
          <h5 className='text-light'>~ Steve Jobs</h5>
        </div>
        
      </div>

    </header>
  )
}

export default Header