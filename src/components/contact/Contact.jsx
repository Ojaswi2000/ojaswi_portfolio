import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'

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
            <a href="mailTo:ojaswiawasthi2025@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger />
            <h4>Messenger</h4>
            <h5>Ojaswi Awasthi</h5>
            <a href="https://m.me/ojaswi.awasthi.7/" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp />
            <h4>Whatsapp</h4>
            <h5>+91-8278894015</h5>
            <a href="https://api.whatsapp.com/send?phone=+918278894015" target="_blank">Send a Message</a>
          </article>
        </div>

        <form action="">
          <input type="text"name='name' placeholder='Your name' required/>
          <input type="email"name='email' placeholder='Your email' required/>
          <textarea name="message" rows="10" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact