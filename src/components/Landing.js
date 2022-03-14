import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import Resume from './res1.pdf'

function Landing(){
    const greeting = "Hello there, I am Akshat!";
    return(
        <React.Fragment>
            <div className="container-fluid landing-bg justify-content-center align-items-center pt-5">
                <div className="align-self-center ht">
                    <div className="display-2 head-font">
                        <Typewriter
                            words={[greeting]}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={180}
                            deleteSpeed={0}
                            delaySpeed={2000}
                        />
                    </div>
                </div>
                <div>
                    <div className="container-fluid row mt-5 pt-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 my-2">
                            <a href={Resume} download><button className="btn btn-outline-warning"><i className="fa fa-download" aria-hidden="true"></i> &nbsp;Download Resume</button></a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 my-2">
                            <a href="#aboutme" className="nolink"><button className="btn btn-outline-primary"><i className="fa fa-user"></i>&nbsp;Wanna Learn More About Me?</button></a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 my-2">
                            <a href="https://github.com/destrex271" target="_blank"><button className="btn btn-outline-warning"><i className="fa fa-github"></i>&nbsp;Checkout My Github Profile</button></a>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 pt-3 footerfont">
                    I’m not a <span style={{color:"#ffffff"}}>great programmer</span>; I’m just a <span style={{color:"#ffffff"}}>good programmer</span> with <span style={{color:"#ffffff"}}>great habits</span>.😉
                </div>
            </div>
        </React.Fragment>
    )
}

export default Landing;