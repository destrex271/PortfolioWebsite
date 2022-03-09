import React from "react";
import { Typewriter } from 'react-simple-typewriter'

function Landing(){
    const greeting = "I am Akshat Jaimini, a freshman at Thapar Institute Of Engineering And Technology, Patiala.\nI am an aspiring Software Developer and An Open Source Enthusiast.";
    return(
        <React.Fragment>
            <div className="container-fluid landing-bg">
                <div className="intro-box">
                    <div className="display-2 head-font">
                        <Typewriter
                            words={['Welcome To My Portfolio!']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={180}
                            deleteSpeed={0}
                            delaySpeed={2000}
                        />
                    </div>
                    {/* <div className="lead head-font">
                        <Typewriter
                            words={[greeting]}
                            cursor
                            cursorStyle='_'
                            typeSpeed={50}
                            
                            delaySpeed={1000}
                        />
                    </div> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Landing;