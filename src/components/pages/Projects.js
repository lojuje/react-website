import React from 'react'
import Card from 'react-bootstrap/Card'
import javaImage from './../../kuvat/java-logo.png'
import reactImage from './../../kuvat/react-logo.png'
import crmImage from './../../kuvat/crm-logo.png'
import './../../App.css'

const Projects = () => {

	
    return(
        <section className='page-projects' id='projects-section'>
        <div className="projects">
			<h1>Projects completed during studies and spare time </h1>
			<div className="cards-container">
					<ul className="cards-items">
					<li className="cards-item">
					<Card style={{ width: '18rem' }}>
  						<Card.Img className="cards-item-img" variant="top" src={javaImage} width="200px" height="150px"  />
  							<Card.Body>
								<Card.Link href="https://github.com/lojuje/ohj2-tyorekisteri" target="_blank" rel="noopener noreferrer">Work Register</Card.Link>
    							<Card.Text>Project for Programming 2 course where we were tasked to create a Java based graphical user interface.</Card.Text>
  							</Card.Body>
					</Card>
					</li>
					<li className="cards-item">
					<Card style={{ width: '18rem' }}>
  						<Card.Img className="cards-item-img" variant="top" src={reactImage} width="200px" height="150px"  />
  							<Card.Body>
								<Card.Link href="https://github.com/lojuje/react-website" target="_blank" rel="noopener noreferrer">React Website</Card.Link>
    							<Card.Text>Version 1. A simple React based website where I could display info about me.</Card.Text>
  							</Card.Body>
					</Card>
					</li>
					<li className="cards-item">
					<Card style={{ width: '18rem' }}>
  						<Card.Img className="cards-item-img" variant="top" src={crmImage} width="200px" height="150px"  />
  							<Card.Body>
								<Card.Link href="https://drive.google.com/file/d/1jCUFJwt-JyKRlue8jnkOD7N3Pa0B1Jre/view?usp=sharing" target="_blank" rel="noopener noreferrer">CRM Project</Card.Link>
    							<Card.Text>A group project given by Ceili Oy for Project Management course. Goal was to make a project plan for a B2C solution.</Card.Text>
  							</Card.Body>
					</Card>
					</li>
					</ul>
				</div>
		</div>
        </section>
    )

}

export default Projects