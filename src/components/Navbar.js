import React from "react";
function Navbar(){
    return(
        <React.Fragment>
            <nav className="container-fluid d-flex justify-content-around navbox fixed-top bg-nav">
                <ul class="nav container-fluid d-flex justify-content-around">
                    <li class="nav-item hover-underline-animation">
                        <a class="nav-link" href="#aboutme">About Me</a>
                    </li>
                    <li class="nav-item hover-underline-animation">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    {/* <li class="nav-item hover-underline-animation">
                        <a class="nav-link" href="#">Research Papers</a>
                    </li> */}
                    <li class="nav-item hover-underline-animation">
                        <a class="nav-link" href="#contacts">Contacts</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;