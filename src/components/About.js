import React from 'react';

const About = (props) => {
  return(
    <div id='about' className='container text-center'>
      {/* <div className='row justify-content-center'>
        <div className='col-auto'>
          <h1>My Skills</h1>
        </div>
      </div> */}
      <div id='about-content' className='row justify-content-center'>
        <div id='about-box' className='col-sm'>
          <i id='about-icon' className='fa fa-paint-brush' />
          <h2>Design</h2>
          <p>
            Good design starts at the drawing board. I create wireframes
            focusing on web content, color palette, and recognizable UI patterns
            for a seamless user experience.
          </p>
        </div>
        <div id='about-box' className='col-sm'>
          <i id='about-icon' className='fa fa-code' />
          <h2>Code</h2>
          <p>
            From animations, SEO, data rendering, and form actions. I use
            industry-standard technologies such as ReactJS and Bootstrap 4 to
            design a powerful front-end code base.
          </p>
        </div>
        <div id='about-box' className='col-sm'>
          <i id='about-icon' className='fa fa-handshake-o' />
          <h2>Teamwork</h2>
        </div>
      </div>
    </div>
  )
}

export default About;
