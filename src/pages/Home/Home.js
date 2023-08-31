import React from "react";
import "./Homefont.css";
import Carosuel from "./Carousel/Carosuel";
import Achievements from "./Achievements/Achievements";
import About from "./Aboutus/About.js";
import Events from "./Events/Events";
import Hmc from "./HmcSlider/hmcSlider.js";
// import Alumni from "./Alumni/Alumni";
import ScrollToTop from "react-scroll-up";
import scrolluparrow from "./scrolluparrow.svg"

const Home = () => {
  return (
    <React.Fragment>
      {/* <div style={{ width: "100%", height: "60px" }}></div> */}
      <Carosuel />
      <About />
      <Events />
      <Hmc />
      <Achievements />
      {/* <Alumni /> */}
      <ScrollToTop showUnder={560} duration={600} 
    style={
      {
        position: 'fixed',
      bottom: 60,
      right: "4vw",
      cursor: 'pointer',
      transitionDuration: '0.5s',
      transitionTimingFunction: 'linear',
      transitionDelay: '0s',
     }
    }
    >
      <div style={
        {
          color:"white",
          backgroundColor:"white",
          boxShadow:"0px 0px 17px 3px rgb(219, 216, 216)",
          width:"65px",
          height:"65px",
          zIndex:"1",
          borderRadius:"50%", 
          position:"relative"
        }
      }>
      <img alt="scrollUpButton" style={{zIndex:"2",width:"50px",height:"50px",position:"absolute",top:"5.7px",left:"6.3px"}} src={scrolluparrow}/>
      </div>
    </ScrollToTop>
    </React.Fragment>
  );
};

export default Home;
