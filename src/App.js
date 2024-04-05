import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='NavBar'>
          <NavBar></NavBar>
        </div>

      <h1 className='MyName'>Zachary Huff</h1>
        
        <div>

            <div className='Home' id='home-section'>
            <Home></Home>
            </div>

            <div className='About' id='about-section'>
            <About></About>
            </div>

            <div className='Projects' id="projects-section">
            <Projects></Projects> 
            </div>

            <div className='Contact' id="contact-section">
            <Contact></Contact>
            </div>

        </div>

    </div>
    

  );
}

export default App;
