import logo from './logo.svg';
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className="body pt-3">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
