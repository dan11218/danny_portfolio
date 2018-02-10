import React from 'react';

//	Renders all my projets, each with link to github and url

const Projects = (props) => {
	return (
		<div className='container'>
			<div className='card' style={{width: '18rem;'}}>
				<img alt='CATalog' className='card-img-top' src={require('../images/catalog.png')} />
				<div className='card-body'>
					<h2 className='card-title'>CATalog</h2>
					<p className='card-text'>
						A place for you to track all your favorite kitties. Create, update, and delete your cats thanks to a solid back-end built with Ruby on Rails!
					</p>
					<a className='btn btn-dark' href='https://github.com/dan11218/CATalog'>View on Github</a><span> </span>
					<a className='btn btn-dark' href='https://nameless-ravine-18613.herokuapp.com/'>Visit Site</a>
				</div>
			</div>
			<br />
			{/* <div className='card' style={{width: '18rem;'}}>
				<div className='card-body'>
					<h2 className='card-title'>HILDA</h2>
					<p className='card-text'>
						HILDA is a platform for school psychologists to get organized and easily
						manage their day to day projects. HILDA makes it easy to quickly view all
						your cases, add new cases/students, and connect and share a child's IEP
						progress with their parents.
					</p>
					<a className='btn btn-dark' href='https://git.generalassemb.ly/dan11218-GA/project_4'>View on Github</a>
				</div>
			</div> */}
			<br />
			<div className='card' style={{width: '18rem;'}}>
				<img alt='halsa' className='card-img-top' src={require('../images/halsa.png')} />
				<div className='card-body'>
					<h2 className='card-title'>Halsa Health</h2>
					<p className='card-text'>
						Halsa Health is a patient's solution to the archaic health insurance
						practices of today. As colaborative project with David Azaria and Yanina Tsutieva,
						Halsa is a one-stop shop for users to register and discover best plans that suit their needs.
					</p>
					<a className='btn btn-dark' href="https://git.generalassemb.ly/Halsa/project-3">View on Github</a><span> </span>
					<a className='btn btn-dark' href="https://halsa.herokuapp.com/">Visit Site</a>
				</div>
			</div>
			<br />
			<div className='card'>
				<div className='card-body'>
					<img alt='boozebible' className='card-img-top' src={require('../images/boozebible.png')} />
					<h2 className='card-title'>Boozebible</h2>
					<p className='card-text'>
						Ever thought to yourself, "what can I make with celery and pickle juice
						into something boozy?" The answer to this problem is Boozebible! With
						Boozebible, easily search an extensive cocktail API by name or just that
						batch of tomatoes you so desperately want to get rid of.
					</p>
					<a className='btn btn-dark' href='https://git.generalassemb.ly/Halsa/project-3'>View on Github</a><span> </span>
					<a className='btn btn-dark' href='https://boozebible.herokuapp.com/'>Visit Site</a>
				</div>
			</div>
		</div>
	)
}

export default Projects;
