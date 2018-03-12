import React from 'react';
// import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light' style={{background: 'rgba(255, 255, 255, .95)'}}>
      <div className='container-fluid'>
        <div className="navbar-brand">
          <img alt='Daniel Graugnard' style={{width: '8rem'}} src={require('../images/logo-large.png')} />
        </div>
        {/* <button className="navbar-toggler"
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
        </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
