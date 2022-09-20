import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Sass/App.scss';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>

  );
}

export default App;
