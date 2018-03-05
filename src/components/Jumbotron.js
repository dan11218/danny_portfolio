import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const Jumbotron = (props) => {
	return (
		<div id='jumbotron' className='jumbotron text-white text-center animated fadeIn'>
			<h1 id='slogan' className='display-4'>It all starts with your idea.</h1>
			<p className='lead'>Leave it to a pro. I'm a web developer with a knack for design and user experience.</p>
			<a id='hire-button' className='btn btn-outline-light' role='button' alt='available for hire' href='mailto:dangraug@me.com'>Available for hire</a>
		</div>
	)
}

export default Jumbotron;
