import React from "react";
import github from '../assets/github.svg'
import linkedin from '../assets/ln.svg'
import twitter from '../assets/twitter.svg'

function Contacts(){
    return(
        <React.Fragment>
            <div className='about_bg container-fluid d-flex justify-content-center'>
                <h1 className="display-2 align-self-start about-font hover-underline-animation2">Contact Me</h1>
            </div>
            <center>
                <div className="row m-5 justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 row justify-content-center">
                        <a href="https://www.linkedin.com/in/akshat-jaimini-05a610203/" target="_blank" ><img alt="Linkedin" src={linkedin} className="size-img" /></a>
                        <a href="https://www.linkedin.com/in/akshat-jaimini-05a610203/" target="_blank" className="lead tx tx-lv">Linkedin</a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 row justify-content-center">
                        <a href="https://github.com/destrex271" target="_blank" ><img alt="Github" src={github}  className="size-img" /></a>
                        <a href="https://github.com/destrex271" target="_blank" className="lead tx">Github</a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 row justify-content-center">
                        <a href="https://twitter.com/Kyllex5"><img alt="Twitter" src={twitter} className="size-img" /></a>
                        <a href="https://twitter.com/Kyllex5" target="_blank" className="lead tx tx-lv">Twitter</a>
                    </div>
                </div>
            </center>
        </React.Fragment>
    );
}

export default Contacts;