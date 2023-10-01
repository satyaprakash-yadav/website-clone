import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  // eslint-disable-next-line
  return (
    <div id='home'>
      <section>
        <div>
            <img id="img2" src={`https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/04/hero-1.jpg`} alt="No Image Found" />
            <img id="img3" src={`https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/04/hero-2.jpg`} alt="No Image Found" />
        </div>
      </section>
      
      <div id="side-section">
            <p>👋 Hello! We are Avada Digital Agency.</p>
            <h1>We create <br /> amazing digital products</h1>
            <span>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.<button>Learn more about us</button></span>
            <br />
            <a href="icons"><FontAwesomeIcon icon={faCirclePlay} size='3x' /><span>View our new showreel</span></a>
        </div>
      
    </div>
  )
}

export default Home
