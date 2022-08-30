import React from 'react'
import './header.css'
import '../../'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello ! I am</h5>
        <h1>Ojaswi Awasthi</h1>
        <h5 className='text-light'>Software Engineer</h5>
      </div>
    </header>
  )
}

export default Header