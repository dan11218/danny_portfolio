import React from 'react';
import {Document} from 'react-pdf/build/entry.webpack';

const About = (props) => {
  return(
    <div className='container'>
      <Document file='../../public/danielgraugnard_resume.pdf'>
      </Document>
    </div>
  )
}

export default About;
