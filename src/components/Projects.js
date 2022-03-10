import React from "react";
import ProjectCard from "./ProjectCard";
import webAct from '../assets/webact.png';
import bemlPng from '../assets/beml.png';
import vader from '../assets/vader.jpg'

function Projects(){
    const git = "https://github.com/destrex271/"
    
    const vaderGit = git+"AccountantVader"
    const bemlGit = git+"Makeathon-BEML-App"
    const webGit = git+"WebActuary1"

    const descwebAct = "A simple tool to check the accessibility issues of your website. This tool prepares a report for the given url highlighting all the accessibility issues and suggesting possible ways to resolve them."
    const descBEML = "BEML Connect aims at providing a better way to transfer vital information from Earth Moving Equipment deployed in remote areas to a central location in the most secure way possible."
    const descVader = "Accountant Vader is a simple and fun discord bot to generate info about top 50 shares of companies in the New York stock Exchange. This project utilizes web scraping to generate this information."
    
    return(
        <React.Fragment>
            <div className='about_bg container-fluid d-flex justify-content-center'>
                <h1 className="display-2 align-self-start about-font hover-underline-animation2">Projects</h1>
            </div>
                <center>
                    <div className="container row mx-5 mt-5">
                        <div className="col-lg-4 col-md-12 col-sm-12 my-5">
                            <ProjectCard 
                                imgsrc={webAct}
                                title="Web Actuary"
                                description={descwebAct}
                                link={webGit}
                            />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 my-5">
                            <ProjectCard
                                imgsrc={bemlPng}
                                title="BEML Connect"
                                description={descBEML}
                                link={bemlGit}
                            />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 my-5">
                            <ProjectCard 
                                imgsrc={vader}
                                title="Accountant Vader"
                                description={descVader}
                                link={vaderGit}
                            />
                        </div>
                    </div>
                </center>
        </React.Fragment>
    );
}

export default Projects;