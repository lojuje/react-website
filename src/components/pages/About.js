import React from 'react'
import resume from './../../kuvat/cv-pic.png'
import './../../App.css'

const About = () => {

    return(
        <section className="page-about" id="about-section">
        <div className="about-body">
				<div className="about-text">
                    <h2>About me</h2>
                    <hr/>
					<p style={{width:'55%', margin:'auto', paddingTop:'1em'}}> 
                    I am 20-something year old man who began his studies at University of Jyvaskyla in January 2019. 
                    I am currently working towards my bachelor&lsquo;s degree.
                    I hope to find an internship or other practical work in IT while I continue my studies.
                    I study IT as my major and statsitics on the side while also being interested in web development and 
                    lately also in communication protocols.
					</p>
				</div>
                <div className="about-resume">
                    <h2>You can find my resume here</h2> 
                    <hr/>
						<a href="https://drive.google.com/file/d/1fYb9SAHasOa93XHDn5mUKwJ8sZWutGlg/view?usp=sharing">
							<img 
								src={resume}
								alt="secondary"
								style={{height:'250px', margin:'auto', paddingTop:'1em'}}
							/>
						</a>
                </div>
			</div>
        </section>
    )

}

/*
<div className="about-resume">
                    <h2>You can find my resume here</h2> 
                    <hr/>
						<a href="https://drive.google.com/file/d/1fYb9SAHasOa93XHDn5mUKwJ8sZWutGlg/view?usp=sharing">
							<img 
								src={resume}
								alt="secondary"
								style={{height:'250px'}}
							/>
						</a>
                </div>
                */

export default About