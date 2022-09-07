import React from 'react'
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3stuhhm', 'template_jwfm9io', form.current, 'kSN6nmPWMVCzU9vAO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ojaswiawasthi2025@gmail.com</h5>
            <a href="mailTo:ojaswiawasthi2025@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ojaswi Awasthi</h5>
            <a href="https://m.me/ojaswi.awasthi.7/" target="_blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-8278894015</h5>
            <a href="https://api.whatsapp.com/send?phone=+918278894015" target="_blank">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
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