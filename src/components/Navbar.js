import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  return (
    <nav className='navbar navbar-dark' style={{backgroundColor: '#35383f'}}>
      <div className='navbar-brand'>
        <img src={require('../images/logo-large.png')} style={{width: '200px'}} />
      </div>
      <ul className='navbar-nav'>
        <Link to='/' className='text-white' className='nav-item text-white'>
          Home
        </Link>
        <Link to='/Projects' className='nav-item text-white'>
          Projects
        </Link>
        {/* <Link to='/Resume' className='nav-item'>
          Resume
        </Link> */}
        <Link to='/Contact' className='nav-item text-white'>
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
