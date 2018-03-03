import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const Jumbotron = (props) => {
	return (
		<div id='jumbotron' className='jumbotron text-white text-center'>
			<h1 id='slogan' className='display-4'>It all starts with your idea.</h1><br />
			<a id='hire-button' className='btn btn-outline-light' role='button' alt='available for hire' href='mailto:dangraug@me.com'>Available for hire</a>
		</div>
	)
}

export default Jumbotron;
