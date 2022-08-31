import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaKaggle} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/ojaswi-awasthi-2a47a117b/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/Ojaswi2000' target='_blank'><FaGithub/></a>
      <a href='https://www.kaggle.com/ojaswiawasthi' target='_blank'><FaKaggle /></a>
    </div>
  )
}

export default HeaderSocials