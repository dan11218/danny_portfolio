import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer'
import About from './components/About';
import Quotes from './components/Quotes'
import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <Jumbotron />
        <About />
        <Quotes />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
