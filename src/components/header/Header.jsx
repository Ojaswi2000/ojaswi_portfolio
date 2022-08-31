import React from 'react'
import CTA from './CTA'
import './header.css'
import PI from '../../assets/git.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello ! I am</h5>
        <h1>Ojaswi Awasthi</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={PI} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header