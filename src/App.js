import './App.css';
import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom";
import Index from './components/Index';
import About from './components/About';
import Question from './components/Question';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Login from './components/Login';
import Protected from './components/Protected';

function App(props) {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} ></Route>
          <Route exact path="/about" element={<About />} ></Route>
          <Route exact path="/question" element={<Protected Component={Question} />} ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
