import React from 'react'
import './footer.css'

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
        <a href="https://www.instagram.com/ojaswi_awasthi2000/">Instagram</a>
        <a href="https://github.com/Ojaswi2000">Github</a>
        <a href="https://twitter.com/OjaswiAwasthi">Twitter</a>
        <a href="https://www.kaggle.com/ojaswiawasthi">Kaggle</a>
      </div>
    </footer>
  )
}

export default Footer