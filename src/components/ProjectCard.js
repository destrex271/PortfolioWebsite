import React from "react";
import { Typewriter } from 'react-simple-typewriter'

function ProjectCard(props){
    return(
        <React.Fragment>
            <div className="card  border-0 zoom bg-card  hover-underline-animation3" style={{width: "20rem"}}>
                <img src= {props.imgsrc} className="card-img-top img-fluid fix" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.link} target="_blank" >
                        <button class="btn btn-outline-info w-50">Read more</button>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProjectCard;