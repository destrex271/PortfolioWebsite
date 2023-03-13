import React from "react";
import Dev from '../assets/abt.svg'

function About(){
    const aboutContent = ""
    const techStack = ""
    return(
        <React.Fragment>
            {/* <div class="bg-dark py-5"> */}
                <div className='container-fluid d-flex justify-content-center'>
                    <h1 className="display-2 align-self-start about-font hover-underline-animation2"><i className="fa fa-user"></i>&nbsp;About Me</h1>
                </div>
                <div class="container-fluid row mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 cent mt-5">
                        <img src={Dev} width="50%" className="ts"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-font-about mt-5">
                    I am <span style={{color:"#ffffff"}} className="glow">Akshat Jaimini</span>, a student at Thapar Institute Of Engineering And Technology, Patiala.<br/>
                        I am an aspiring <span style={{color:"#ffffff"}} className="glow">Software Engineer</span> and An <span style={{color:"#ffffff"}} className="glow">Open Source Enthusiast</span>.
                        Improving human interactions with computers and all electronic devices excites me the most.<br/>
                            Currently I am intrested in learning more about <span style={{color:"#ffffff"}} className="glow">Systems Programming</span> and 
<span style={{color:"#ffffff"}} className="glow">Computer Graphics</span>.<br/><br/>
                    </div>
                </div>
            {/* </div> */}
        </React.Fragment>
    );
}

export default About;
