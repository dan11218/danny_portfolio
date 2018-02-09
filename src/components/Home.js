import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = (props) => {
	return (
		<div className='container'>
			<h4 className='jumbotron'>The need to solve problems quickly and creatively <br />
				is my engine towards my new career as a Junior Software Engineer. I strive <br />
				to empathize with my users and fulfill their needs with my technical skills <br />
				and abilities to approach challenges creatively and confidently. <br />
				When I am not wearing the hat of an engineer, I am a writer looking <br />
				for a new book to pick for inspiration or to write a new chapter in my memoir.<br />
				<Link className='btn btn-dark btn-lg' to='/Home'>Contact</Link>
			</h4>
		</div>
	)
}

export default HomePage;
