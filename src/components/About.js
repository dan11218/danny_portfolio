import React from 'react'
// import { Link } from 'react-router-dom';

const About = (props) => {
  return(
    <div id='about' className='container-fluid'>
      {/* <div className='row justify-content-center'>
        <div className='col-auto'>
          <h1>My Skills</h1>
        </div>
      </div> */}
      <div className='container-fluid'>
        <div id='about-content' className='row justify-content-center'>
          <div id='about-box' className='card col-sm'>
            <div className="card-body text-center">
              <i id='about-icon' className='fa fa-paint-brush' />
              <h2 className="card-title">Design</h2>
              <p className="card-text text-left">
                Good design starts at the drawing board. I create wireframes
                focusing on web content, color palette, and recognizable UI patterns
                for a seamless user experience.
              </p>
            </div>
            {/* <Link id="learn-more" className="btn btn-light" to="/Design">Learn More</Link> */}
          </div>
          <div id='about-box' className='card col-sm'>
           <div className="card-body text-center">
            <i id='about-icon' className='fa fa-gears' />
              <h2 className="card-title">Development</h2>
              <p className="card-text text-left">
                From animations, SEO, data rendering, and form actions. I use
                industry-standard technologies such as ReactJS and Bootstrap 4 to
                design a powerful front-end code base.
              </p>
            </div>
            {/* <Link id="learn-more" className="btn btn-light" to="/Development">Learn More</Link> */}
          </div>
          <div id='about-box' className='card col-sm'>
            <div className="card-body text-center">
              <i id='about-icon' className='fa fa-handshake-o' />
              <h2 className="card-title">Teamwork</h2>
              <p className="card-text text-left">
                Creating your website is a team effort. I work closely with my clients
                to transform their ideas from an MVP into an ambitious final product.
              </p>
            </div>
            {/* <Link id="learn-more" className="btn btn-light" to="/Teamwork">Learn More</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
