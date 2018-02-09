import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Contact' component={Resume} />
        </Switch>
      </div>
    );
  }
}

export default App;
