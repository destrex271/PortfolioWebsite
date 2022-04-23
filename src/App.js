import logo from './logo.svg';
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import Field from './components/Starfield';
import About from './components/About';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Projects from './components/Projects';
import axios from 'axios'
import { useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";

function App() {

  useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get('https://arcane-journey-55676.herokuapp.com/').then(res => {console.log(res.cookie)})
        console.log()
      }
  , []);

  return (
    <div className="body pt-3">
      <ScrollToTop smooth color="blue" />
      <div class="landing-bg">
        <Navbar />
        {/* <Field /> */}
        <section id="landing" class="landing-bg">
          <center>
            <Landing />
          </center>
        </section>
      </div>
      <section id="aboutme">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <footer class="footer">
      <div class="container-fluid d-flex justify-content-end fixed-bottom">
        <span>
          <a href="https://github.com/destrex271" class="text-col" target="_blank">
            &#169; destrex271@github
          </a>
        </span>
      </div>
    </footer>
    </div>
  );
}

export default App;
