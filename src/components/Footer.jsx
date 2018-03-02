import React from 'react';

const Footer = () => {
  return(
    <footer>
      <div className='container text-center'>
        <div className='row justify-content-center'>
          <div id='contact-buttons' className='col-auto'>
            <a href='https://www.github.com/dan11218'><i className='fa fa-github rounded-circle text-light'></i></a>
          </div>
          <div id='contact-buttons' className='col-auto'>
            <a href='https://www.linkedin.com/in/danielgraugnard'><i className='fa fa-linkedin text-light'></i></a>
          </div>
          <div id='contact-buttons' className='col-auto'>
            <a href='mailto:dangraug@me.com'><i className='fa fa-envelope text-light'></i></a>
          </div>
        </div>
        <p id='copywrite'>Daniel Graugnard © 2017</p>
      </div>
    </footer>
  )
}

export default Footer;
