import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const HomePage = (props) => {
	return (
		<div className='jumbotron text-white text-center'>
			<p className='lead'>
				The need to solve problems quickly and creatively
				is my engine towards my new career as a Junior Software Engineer. I strive
				to empathize with my users and fulfill their needs with my technical skills
				and abilities to approach challenges creatively and confidently.
				When I am not wearing the hat of an engineer, I am a writer looking
				for a new book to pick for inspiration or to write a new chapter in my memoir.
			</p>
			<a href='https://www.github.com/dan11218'><i className='fa fa-github text-white'  style={{fontSize: 55}}></i></a> <span> </span>
			<a href='https://www.linkedin.com/in/danielgraugnard'><i className='fa fa-linkedin-square text-white' style={{fontSize: 55}}></i></a>
		</div>
	)
}

export default HomePage;
