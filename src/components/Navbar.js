import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light' style={{background: 'none'}}>
      <div className="navbar-brand">
        <h1>DANIEL GRAUGNARD</h1>
      </div>
      <button className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/Projects'>Projects</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/Contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
