import logo from './logo.svg';
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import Field from './components/Starfield';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

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

    </div>
  );
}

export default App;
