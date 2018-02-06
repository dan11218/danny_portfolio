import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Projects' component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default App;
