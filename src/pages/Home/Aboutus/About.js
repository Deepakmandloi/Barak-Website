import React from 'react'
import Aboutcarousel  from './Aboutcarousel'
import aboutusstyles from './About.module.css'

function About() {
  return (
    <div
     className={aboutusstyles.parentaboutwholecontainer}
    >
    <div 
    className={aboutusstyles.aboutwholecontainer}
    >
      <div 
      className={aboutusstyles.aboutfirstcontainer}
      >
        <div
      className={aboutusstyles.aboutheading}
        >About Us</div>
         <p 
         style={{
             fontFamily:"Montserrat",
           fontWeight:"400"
         }}
         >
         Barak is the 7th hostel in the IITG fraternity and derives its name from the River Barak which is a major river in north-eastern India and is a part of the Surma-Meghna River System. 
         </p>
      </div>
      <div 
      className={aboutusstyles.aboutsecondcontainer}
      >
       <Aboutcarousel></Aboutcarousel>
      </div>
    </div>
    </div>
  )
}

export default About