import React from 'react';

const Projects = (props) => {
	return (
		<div className='projects'>
			<div className='container'>
				<h2>HILDA</h2>
				<a href='https://git.generalassemb.ly/dan11218-GA/project_4'>View on Gthub</a>
				<p>HILDA is a platform for school psychologists to get organized and easily
					manage their day to day projects. HILDA makes it easy to quickly view all
					your cases, add new cases/students, and connect and share a child's IEP
					progress with their parents.</p>
			</div>
			<div className='container'>
				<h2>Halsa Health</h2>
				<a href='https://git.generalassemb.ly/Halsa/project-3'>View on Github</a>
				<p>Halsa Health is a patient's solution to the archaic health insurance <br />
					practices of today. As colaborative project with David Azaria and Yanina Tsutieva, <br />
					Halsa is a one-stop shop for users to register and deiscover best plans that suit their needs. </p>
			</div>
			<div className='container'>
				<h2>Boozebible</h2>
				<a href='https://git.generalassemb.ly/Halsa/project-3'>View on Github</a>
				<p>Ever thought to yourself, "what can I make with celery and pickle juice <br />
					into something boozy?" The answer to this problem is Boozebible! With <br />
					Boozebible, easily search an extensive cocktail API by name or just that <br />
					batch of tomatoes you so desperately want to get rid of. </p>
			</div>
		</div>
	)
}

export default Projects;
