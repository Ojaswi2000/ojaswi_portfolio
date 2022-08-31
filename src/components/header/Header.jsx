import React from 'react'
import CTA from './CTA'
import './header.css'
import PI from '../../assets/git.jpg';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello ! I am</h5>
        <h1>Ojaswi Awasthi</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />


        <div className="me">
          <img src={PI} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header