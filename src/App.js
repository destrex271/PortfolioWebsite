import logo from './logo.svg';
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import Field from './components/Starfield';
import About from './components/About';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Projects from './components/Projects';

function App() {
  return (
    <div className="body pt-3">
      <header>
        <Navbar />
        <Field />
        <section id="landing">
          <center>
            <Landing />
          </center>
        </section>
      </header>
      <section id="aboutme">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
