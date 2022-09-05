import React from 'react'
import './about.css'
import AboutMe from '../../assets/about_me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TbFolders} from 'react-icons/tb'

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
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ year working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Company</h5>
                <small>Paymentus Corporation</small>
              </article>

              <article className='about__card'>
                <TbFolders className='about__icon'/>
                <h5>Projects</h5>
                <small>5+ Completed Projects</small>
              </article>

            </div>

            <p>
              I am Ojaswi Awasthi. My interests lie in the field of full stack development and Data Science.
              I have completed many projects in these domains over the course of my engineering in college and have developed a passionate fervour for building
              web apps for clients. I am currently working for Paymentus Corporation and open to new opportunities that excite me. My hobbies are sketching, singing and reading novels. 
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk'</a>
        </div>

      </div>
    </section>
  )
}

export default About