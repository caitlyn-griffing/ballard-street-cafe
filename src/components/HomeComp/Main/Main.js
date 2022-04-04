import React from 'react'
import heroImg from '../../../images/oldschool-pics-w-address.jpeg'
import './Main.css'
function Main() {
  return (
    <div id='home-main'>
      <div className='home-section'>
        <h3>HOURS</h3>
        <p>Sunday 7am-2pm</p>
        <p>OPEN 7 days a week</p>
      </div>
        <img src={heroImg} alt='Ballard Street Cafe'/>
        <p>If you're looking for high quality and personal service, you've come to the right place. At Ballard Street Cafe we'll give you the attention and personal service you'll come to expect and enjoy. We offer the best in-home cooking, Best breakfast around, AND the Best Chicken Fried Steak. Ballard Street Cafe has been located in Wylie since 1997. Let us feed you the best homecooking you've had since Grandma's house!</p>
    </div>
  )
}

export default Main