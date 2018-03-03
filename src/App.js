import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
