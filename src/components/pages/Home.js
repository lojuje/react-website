import React from 'react'
import {Grid, Cell} from 'react-mdl'
import profile from './../../kuvat/img1.png'
import AnimSection from './../AnimSection'
import './../../App.css'

const Home = () => {

	
    return(
		<>
		<AnimSection />
        <section className='page-home' id='home'>
				<div style={{width:'100%', margin: 'auto'}}>
					<Grid className="home-grid">
						<Cell col={12}>
							<img 
								src={profile}
								alt="avatar"
								className="avatar-img"
							/>
							<div className="banner-text">
								<h1>Jussi Loppukaarre</h1>

								<hr />

								<p>Information Technology Student | Coffee Maniac | Technology Enthusiast</p>

								<div className="social-links">
									{/* LinkedIn */}
									<a href="https://www.linkedin.com/in/jloppukaarre/" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-linkedin" aria-hidden="true"/>
									</a>
									{/* GitHub */}
									<a href="https://github.com/lojuje" target="_blank" rel="noopener noreferrer">
										<i className="fab fa-github-square" aria-hidden="true"/>
									</a>
								</div>
							</div>
						</Cell>
					</Grid>
				</div>
        </section>
		</>
    )

}

export default Home