import React from "react";
import Dev from '../assets/abt.svg'

function About(){
    const aboutContent = "I am Akshat Jaimini, a freshman at Thapar Institute Of Engineering And Technology, Patiala.\nI am an aspiring Software Developer and An Open Source Enthusiast.\nImproving human interactions with computers and all electronic devices excites me the most.\nCurrently I am intrested in learning more about Game Developement and the 3-D industry in general alongwith some work in mobile and web developement."
    const techStack = "I am working with React.js for frontend developement, Django for Backend Web Developement, React Native for mobile app developement and am currently learning game developement with Unity 3D."
    return(
        <React.Fragment>
            <div className='about_bg container-fluid d-flex justify-content-center'>
                <h1 className="display-2 align-self-start about-font hover-underline-animation2"><i className="fa fa-user"></i>&nbsp;About Me</h1>
            </div>
            <div class="container-fluid row mt-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 cent">
                    <img src={Dev} width="50%"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-font-about">
                    {aboutContent}<br/><br/>{techStack}
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;