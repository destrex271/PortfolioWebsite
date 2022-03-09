import React from "react";
function Navbar(){
    return(
        <React.Fragment>
            <nav className="container-fluid d-flex justify-content-around navbox sticky-top">
                <ul class="nav container-fluid d-flex justify-content-around">
                    <li class="nav-item hover-underline-animation">
                        <a class="nav-link" aria-current="page" href="aboutme">About Me</a>
                    </li>
                    <li class="nav-item hover-underline-animation">
                        <a class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item hover-underline-animation">
                        <a class="nav-link" href="#">Research Papers</a>
                    </li>
                    <li class="nav-item hover-underline-animation">
                        <a class="nav-link" href="#">Contacts</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;