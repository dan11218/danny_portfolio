import React from 'react';

//	Renders all my projets, each with link to github and url

const Projects = (props) => {
	return (
		<div id='projects' className='container-fluid'>
			<div id='project-header' className='text-center'>
				<h1>My recent work.</h1>
			</div>
			<div className='container text-center'>
				<div id='project-section' className='row'>
					<div id="project-card" className='card col-sm'>
						<img className='card-img-top img-fluid' id='project-image' alt='hilda' src={require('../images/clphotography.png')} />
						<div className="card-body">
						<h3 className="card-title">Christian Lange Photographers</h3>
						<p className="card-text text-left">
							Christian Lange Commercial Photoraphers offer high quality, professional 
							photography services in Knoxville, Tennessee. Using the Bootstrap 4 framework, 
							I devloped a sleek, responsive website that looks great on mobile and tablets.
						</p>
						</div>
						<a id="visit-site" className='btn btn-outline-light' style={{ borderRadius: '45px' }} href='https://cldemo.netlify.com/'>Visit Site</a>
					</div>
				</div>
				<div id='project-section' className='row'>
					<div id="project-card" className='card col-sm'>
						<img className='card-img-top img-fluid' id='project-image' alt='hilda' src={require('../images/hilda.png')} />
						<div className="card-body">
							<h3 className="card-title">HILDA</h3>
							<p className="card-text text-left">
								HILDA is a platform for school psychologists to get organized and easily
								manage their day to day projects. HILDA makes it easy to quickly view all
								your cases, add new cases/students, and connect and share a child's IEP
								progress with their parents.
							</p>
						</div>
						<a id="visit-site" className='btn btn-outline-light' style={{ borderRadius: '45px' }} href='https://hilda.netlify.com/'>Visit Site</a>
					</div>
				</div>
				<div id='project-section' className='row'>
					<div id="project-card" className='card col-sm'>
						<img className='card-img-top img-fluid' id='project-image' alt='hilda' src={require('../images/halsa.png')} />
						<div className="card-body">
						<h3 className="card-title">Halsa Health</h3>
						<p className="card-text text-left">
							Halsa Health is a patient's solution to the archaic health insurance
							practices of today. As colaborative project with David Azaria and Yanina Tsutieva,
							Halsa is a one-stop shop for users to register and discover best plans that suit their needs.
						</p>
						</div>
						{/* <a id="visit-site" className='btn btn-outline-light' style={{ borderRadius: '45px' }} href='https://github.com/dan11218/hilda'>View on Github</a><span> </span> */}
						<a id="visit-site" className='btn btn-outline-light' style={{ borderRadius: '45px' }} href='https://halsa.herokuapp.com/'>Visit Site</a>
					</div>
				</div>
				<div id='project-section' className='row'>
					<div id="project-card" className='card col-sm'>
						<img className='card-img-top img-fluid' id='project-image' alt='catalog' src={require('../images/catalog.png')} />
						<div className="card-body">
						<h3 className="card-title">CATalog</h3>
						<p className="card-text text-left">
							A place for you to track all your favorite kitties. Create, update,
							and delete your cats thanks to a solid back-end built with
							Ruby on Rails.
						</p>
						</div>
						{/* <a id="visit-site" className='btn btn-outline-light' style={{ borderRadius: '45px' }} href='https://github.com/dan11218/hilda'>View on Github</a><span> </span> */}
						<a id="visit-site" className='btn btn-outline-light' style={{ borderRadius: '45px' }} href='https://nameless-ravine-18613.herokuapp.com//'>Visit Site</a>
					</div>
				</div>
				{/* <div id='project-section' className='row'>
					<div className='col-sm'>
						<h3 className="card-title">Boozebible</h3>
						<p className="card-text">
							Ever thought to yourself, "what can I make with celery and pickle juice
							into something boozy?" The answer to this problem is Boozebible! With
							Boozebible, easily search an extensive cocktail API by name or just that
							batch of tomatoes you so desperately want to get rid of.
						</p>
						<a id="visit-site" className='btn btn-outline-light' style={{borderRadius: '45px'}} href='https://github.com/dan11218/hilda'>View on Github</a><span> </span>
						<a className='btn btn-outline-light' style={{borderRadius: '45px'}} href='https://hilda.netlify.com/'>Visit Site</a>
					</div>
					<div className='col-sm'>
						<img className='' id='project-image' alt='catalog' src={require('../images/boozebible.png')} />
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default Projects;
