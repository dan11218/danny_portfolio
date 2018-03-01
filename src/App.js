import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Contact' component={Contact} />
          {/* <Route exact path='/Resume' component={Resume} /> */}
        </Switch>
        <p style={{fontSize: '10px'}}>© Copyright 2018 Daniel Graugnard</p>
      </div>
    );
  }
}

export default App;
