import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const Jumbotron = (props) => {
	return (
		<div id='jumbotron' className='jumbotron text-white text-center animated fadeIn'>
			<img id="logo" className="img-fluid" alt='Daniel Graugnard' height="400px" width="600px" src={require('../images/logo-line.png')} />
			<h1 id='slogan' className='display-4'>It all starts with an idea.</h1>
			<p className='lead'>I'm a web developer with a knack for design.</p>
			<a id='hire-button' className='btn btn-outline-light' role='button' alt='available for hire' href='mailto:dangraug@me.com'>Available for hire</a>
		</div>
	)
}

export default Jumbotron;
