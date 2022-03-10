import React from "react";

function About(){
    const aboutContent = "I am Akshat Jaimini, a freshman at Thapar Institute Of Engineering And Technology, Patiala.\nI am an aspiring Software Developer and An Open Source Enthusiast.\nImproving human interactions with computers and all electronic devices excites me the most.\nCurrently I am intrested in learning more about Game Developement and the 3-D industry in general alongwith some work in mobile and web developement."
    const techStack = "Currently I am working with React.js for frontend developement, Django for Backend Web Developement, React Native for mobile app developement and am currently learning game developement with Unity 3D."
    return(
        <React.Fragment>
            <div className='about_bg container-fluid d-flex justify-content-center'>
                <h1 className="display-2 align-self-start about-font hover-underline-animation2">About Me</h1>
            </div>
            <div className="mt-2">
                <div className="d-flex justify-content-center m-2 p-2 row">
                    <div className="content-box content-font-about mt-5">
                        {aboutContent}
                    </div>
                    <div className="content-box content-font-about mt-5">
                        {techStack}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;