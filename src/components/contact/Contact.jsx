import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail />
            <h4>Email</h4>
            <h5>ojaswiawasthi2025@gmail.com</h5>
            <a href="mailTo:ojaswiawasthi2025@gmail.com">Send a Message</a>
          </article>
        </div>

        <form action="">

        </form>
      </div>
    </section>
  )
}

export default Contact