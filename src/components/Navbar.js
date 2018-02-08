import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='navbar-brand'>
        <h3>Daniel Graugnard</h3>
      </div>
      <ul className='navbar-nav'>
        <Link to='/' className='nav-item'>
          Home
        </Link>
        <Link to='/Projects' className='nav-item'>
          Projects
        </Link>
        <Link to='/Resume' className='nav-item'>
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
