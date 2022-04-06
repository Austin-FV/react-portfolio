import React from 'react' 
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/Austin-FV' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Austin-FV' target="_blank"><FaGithub/></a>
        {/* <a href='https://instagram.com/Austin_FV' target="_blank"><BsInstagram/></a> */}
    </div>
  )
}

export default HeaderSocials