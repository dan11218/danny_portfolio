import React from 'react';

//	Renders all my projets, each with link to github and url

const Projects = (props) => {
	return (
		<div id='projects' className='container-fluid'>
			<div id='project-header' className='text-center'>
				<h1>A few things I'm working on.</h1>
			</div>
			<div className='container text-center'>
				<div id='project-section' className='row'>
					<div className='col-sm'>
						<img className='img-fluid' id='project-image' alt='hilda' src={require('../images/hilda.png')} />
					</div>
					<div className='col-sm'>
						<h3>HILDA</h3>
						<p>
							HILDA is a platform for school psychologists to get organized and easily
							manage their day to day projects. HILDA makes it easy to quickly view all
							your cases, add new cases/students, and connect and share a child's IEP
							progress with their parents.
						</p>
						<a className='btn btn-outline-dark' style={{borderRadius: '45px'}} href='https://github.com/dan11218/hilda'>View on Github</a><span> </span>
						<a className='btn btn-outline-dark' style={{borderRadius: '45px'}} href='https://hilda.netlify.com/'>Visit Site</a>
					</div>
				</div>
				<div id='project-section' className='row'>
					<div className='col-sm'>
						<h3>Halsa Health</h3>
						<p>
							Halsa Health is a patient's solution to the archaic health insurance
							practices of today. As colaborative project with David Azaria and Yanina Tsutieva,
							Halsa is a one-stop shop for users to register and discover best plans that suit their needs.
						</p>
						<a className='btn btn-outline-dark' style={{borderRadius: '45px'}} href='https://github.com/dan11218/hilda'>View on Github</a><span> </span>
						<a className='btn btn-outline-dark' style={{borderRadius: '45px'}} href='https://hilda.netlify.com/'>Visit Site</a>
					</div>
					<div className='col-sm'>
						<img className='img-fluid' id='project-image' alt='hilda' src={require('../images/halsa.png')} />
					</div>
				</div>
				<div id='project-section' className='row'>
					<div className='col-sm'>
						<img className='img-fluid rounded' id='project-image' alt='catalog' src={require('../images/catalog.png')} />
					</div>
					<div className='col-sm'>
						<h3>CATalog</h3>
						<p>
							A place for you to track all your favorite kitties. Create, update,
							and delete your cats thanks to a solid back-end built with
							Ruby on Rails.
						</p>
						<a className='btn btn-outline-dark' style={{borderRadius: '45px'}} href='https://github.com/dan11218/hilda'>View on Github</a><span> </span>
						<a className='btn btn-outline-dark' style={{borderRadius: '45px'}} href='https://hilda.netlify.com/'>Visit Site</a>
					</div>
				</div>
				{/* <div id='project-section' className='row'>
					<div className='col-sm'>
						<h3>Boozebible</h3>
						<p>
							Ever thought to yourself, "what can I make with celery and pickle juice
							into something boozy?" The answer to this problem is Boozebible! With
							Boozebible, easily search an extensive cocktail API by name or just that
							batch of tomatoes you so desperately want to get rid of.
						</p>
						<a className='btn btn-outline-dark' style={{borderRadius: '45px'}} href='https://github.com/dan11218/hilda'>View on Github</a><span> </span>
						<a className='btn btn-outline-dark' style={{borderRadius: '45px'}} href='https://hilda.netlify.com/'>Visit Site</a>
					</div>
					<div className='col-sm'>
						<img className='img-fluid' id='project-image' alt='catalog' src={require('../images/boozebible.png')} />
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default Projects;
