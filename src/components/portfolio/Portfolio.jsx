import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/chat-app.PNG'
import IMG2 from '../../assets/box-office.PNG'
import IMG3 from '../../assets/appointment.PNG'
import IMG4 from '../../assets/tictactoe.PNG'

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
    image: IMG1,
    title: "Payment Application-MERN Stack",
    github: "https://github.com/Ojaswi2000/paybytext_mongo",
    demo: "https://github.com/Ojaswi2000/paybytext_mongo"
  },

  {
    id: 6,
    image: IMG1,
    title: "Kaggle Submissions",
    github: "https://github.com/Ojaswi2000/chat-app",
    demo: "https://github.com/Ojaswi2000/chat-app"
  },

]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3>React Chat App using Firebase </h3>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio