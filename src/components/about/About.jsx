import React from 'react'
import './about.css'
import AboutMe from '../../assets/about_me.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMe} alt="About Me"/>
          </div>
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward />
                <h5>Experience</h5>
                <small>1+ year working</small>
              </article>

              <article className='about__card'>
                <FaAward />
                <h5>Company</h5>
                <small>Paymentus Corporation</small>
              </article>

              <article className='about__card'>
                <FaAward />
                <h5>Projects</h5>
                <small>5+ Completed Projects</small>
              </article>

            </div>
        </div>

      </div>
    </section>
  )
}

export default About