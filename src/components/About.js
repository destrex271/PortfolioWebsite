import React from "react";
import Dev from '../assets/abt.svg'

function About(){
    const aboutContent = ""
    const techStack = ""
    return(
        <React.Fragment>
            <div className='about_bg container-fluid d-flex justify-content-center'>
                <h1 className="display-2 align-self-start about-font hover-underline-animation2"><i className="fa fa-user"></i>&nbsp;About Me</h1>
            </div>
            <div class="container-fluid row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 cent mt-5">
                    <img src={Dev} width="50%" className="ts"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-font-about mt-5">
                I am <span style={{color:"#ffffff"}} className="glow">Akshat Jaimini</span>, a freshman at Thapar Institute Of Engineering And Technology, Patiala.<br/>I am an aspiring <span style={{color:"#ffffff"}} className="glow">Software Developer</span> and An <span style={{color:"#ffffff"}} className="glow">Open Source Enthusiast</span>.Improving human interactions with computers and all electronic devices excites me the most.<br/>Currently I am intrested in learning more about <span style={{color:"#ffffff"}} className="glow">Game Developement</span> and the 3-D industry in general alongwith some work in mobile and web developement.<br/><br/>I am working with <span style={{color:"#ffffff"}} className="glow">React.js</span> for frontend developement, <span style={{color:"#ffffff"}} className="glow">Django</span> for Backend Web Developement, <span style={{color:"#ffffff"}} className="glow">React Native</span> for mobile app developement.<br/>I am also learning game developement in <span style={{color:"#ffffff"}} className="glow">Unity 3D</span>.
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;