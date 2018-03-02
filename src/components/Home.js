import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const HomePage = (props) => {
	return (
		<div id='jumbotron' className='jumbotron text-white text-center'>
			<h1 className='display-4'>It all starts with your idea.</h1><br />
			<a id='hire-button' className='btn btn-outline-light' role='button' alt='available for hire' href='mailto:dangraug@me.com'>AVAILABLE FOR HIRE</a>
		</div>
	)
}

export default HomePage;
