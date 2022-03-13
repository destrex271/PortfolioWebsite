import React from "react";
import { Typewriter } from 'react-simple-typewriter'

function Landing(){
    const greeting = "Hello there, I am Akshat!"
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
                        <div className="col-lg-4 col-md-4 col-sm-0 col-xs-0"></div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <a href="#aboutme" class="nolink"><button class="btn btn-outline-success">Wanna Learn More About Me?</button></a>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-0 col-xs-0"></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Landing;