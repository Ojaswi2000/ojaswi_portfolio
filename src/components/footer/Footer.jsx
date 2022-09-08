import React from 'react'
import './footer.css'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillGithub} from 'react-icons/ai'
import {FaKaggle} from 'react-icons/fa' 
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Footer</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/ojaswi_awasthi2000/"><RiInstagramFill /></a>
        <a href="https://github.com/Ojaswi2000"><AiFillGithub /></a>
        <a href="https://twitter.com/OjaswiAwasthi"><BsTwitter /></a>
        <a href="https://www.kaggle.com/ojaswiawasthi"><FaKaggle /></a>
      </div>
    </footer>
  )
}

export default Footer