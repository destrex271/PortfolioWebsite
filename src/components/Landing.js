import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import Resume from './res1.pdf'
import MovingText from 'react-moving-text'

function Landing(){
    const greeting = "Hello there✌ ,I am Akshat!";
    return(
        <React.Fragment>
            <div className="container landing-bg justify-content-center align-items-center pt-5">
                <div className="marg-down">
                    <div className="align-self-center ht">
                        <div className="display-2 head-font typewriter">
                            <strong>{greeting}</strong>
                        </div>
                    </div>
                    <div className="container row mt-4 pt-5" style={{textAlign:"center",paddingLeft:"40px"}}>
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
                    <div className="container mt-5 pt-3 footerfont">
                        <div className="marg-up">
                            <MovingText
                                type="bounce"
                                duration="1200ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="infinite"
                                fillMode="none"
                            >
                                I’m not a <span style={{color:"#ffffff"}}>great programmer</span>; I’m just a <span style={{color:"#ffffff"}}>good programmer</span> with <span style={{color:"#ffffff"}}>great habits</span>.😉
                            </MovingText>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Landing;