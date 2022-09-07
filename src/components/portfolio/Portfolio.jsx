import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/chat-app.PNG'
import IMG2 from '../../assets/box-office.PNG'
import IMG3 from '../../assets/appointment.png'
import IMG4 from '../../assets/tictactoe.PNG'
import IMG5 from '../../assets/payment.PNG'
import IMG6 from '../../assets/kaggle.PNG'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "React Chatting Application",
    github: "https://github.com/Ojaswi2000/chat-app",
    demo: "https://github.com/Ojaswi2000/chat-app"
  },

  {
    id: 2,
    image: IMG2,
    title: "Box-Office React Application",
    github: "https://github.com/Ojaswi2000/box-office",
    demo: "https://ojaswi2000.github.io/box-office/#/"
  },

  {
    id: 3,
    image: IMG3,
    title: "Appointment Booking App",
    github: "https://github.com/Ojaswi2000/interface-react",
    demo: "https://github.com/Ojaswi2000/interface-react"
  },

  {
    id: 4,
    image: IMG4,
    title: "Tic Tac Toe Game",
    github: "https://github.com/Ojaswi2000/Tic-Tac-Toe",
    demo: "http://ojaswi_tictactoe.surge.sh/"
  },

  {
    id: 5,
    image: IMG5,
    title: "Payment Application-MERN Stack",
    github: "https://github.com/Ojaswi2000/paybytext_mongo",
    demo: "https://github.com/Ojaswi2000/paybytext_mongo"
  },

  {
    id: 6,
    image: IMG6,
    title: "Kaggle Submissions",
    github: "https://github.com/Ojaswi2000/Kaggle-submissions",
    demo: "https://www.kaggle.com/ojaswiawasthi"
  },

]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image,title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  )
}

export default Portfolio