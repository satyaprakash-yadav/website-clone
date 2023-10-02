import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-solid-svg-icons'
import Circle from '../assets/clock icon.png'
import Spiral from '../assets/spiral-icon.jpg'
import Cloud from '../assets/cloud icon.png'
import Team from '../assets/team.jpg'

const Studio = () => {
  return (
    <section>
      <p id='para2'>We are very fortunate to work with these amazing partners</p>
      <div id='container'>
        <img src={`https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/08/client-14.jpg`} alt="#" />
        <img src={`https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/08/client-15.jpg`} alt="#" />
        <img src={`https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/08/client-17.jpg`} alt="#" />
        <img src={`https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/08/client-20.jpg`} alt="#" />
        <img src={`https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/08/client-13.jpg`} alt="#" />
        <img src={`https://avada.website/digital-agency/wp-content/uploads/sites/160/2021/08/client-21.jpg`} alt="#" />
      </div>

      <div className="background">
        <img src={Team} alt="" />
      </div>

      <div className="cards">
          <p id='para4'>We are Avada Digital Agency</p>
          <h1>Analyze your <br /> entire market <br />pricing & stock<br /> availability</h1>
          <p>Mauris purus maecenas purus, aliquet lacus varius. Proin venenatis vel cras phasellus condimentum.</p>
          <button>Buy Avada Today</button>
      </div>
  
      <div className="icons">
      <img src={Spiral} alt="" />
      <h1>Web & Mobile</h1>
      <p>Nulla quis lorem ut libero <br /> malesuada feugiat. Quisque <br /> velit nisi, pretium.</p>
      </div>

      <div className="icons">
      <img src={Circle} alt="" />
      <h1>UX design</h1>
      <p>Nulla porttitor accumsan <br /> tincidunt. Cras ultricies ligula <br /> sed magna dictum.</p>
      </div>

      <div className="icons">
      <img src={Cloud} alt="" />
      <h1>Digital marketing</h1>
      <p>Donec sollicitudin molestie <br /> malesuada. Mauris blandit <br /> aliquet elit.</p>
      </div>

    </section>
  )
}

export default Studio
