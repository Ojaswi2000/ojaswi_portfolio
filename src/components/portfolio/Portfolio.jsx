import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/chat-app.PNG'


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
    image: IMG1,
    title: "Box-Office React Application",
    github: "https://github.com/Ojaswi2000/box-office",
    demo: "https://ojaswi2000.github.io/box-office/#/"
  },

  {
    id: 3,
    image: IMG1,
    title: "Appointment Booking App",
    github: "https://github.com/Ojaswi2000/interface-react",
    demo: "https://github.com/Ojaswi2000/interface-react"
  },

  {
    id: 4,
    image: IMG1,
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