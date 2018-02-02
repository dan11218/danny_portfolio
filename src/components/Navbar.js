import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <div className='navbar-burger'>
          <span>Home</span>
          <span>Projects</span>
          <span>Contact</span>
          <span>About Me</span>
        </div>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start navbar-item'>
          Home
        </div>
        <div className='navbar-item'>
          Projects
        </div>
        <div className='navbar-item'>
          Contact
        </div>
        <div className='navbar-end navbar-item'>
          About Me
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
