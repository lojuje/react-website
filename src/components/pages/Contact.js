import React from 'react'
import './../../App.css'

const Contact = () => {
    //TODO
    return(
        <section className='page-contact' id='contact-section'>
            <div className="contact-container">
            <h1>Contact Me</h1>
            <div className="contact-div">
            <ul>
                <li>
                <i className="fa fa-phone-square" aria-hidden="true"/>
                <p >(+358) 405340762</p>
                </li>
                <li>
                <i className="fas fa-envelope-open-text" aria-hidden="true"/>
                <p>jussi.loppukaarre@gmail.com</p>
                </li>
                <li>
                <i className="fab fa-linkedin-in" aria-hidden="true"/>
                <p>Jussi Loppukaarre</p>
                </li>
            </ul>
            </div>
            </div>
        </section>
    )

}

export default Contact

/*
     <div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
										<i className="fa fa-phone-square" aria-hidden="true"/>
                                    <p>(+358) 405340762</p>
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
										<i className="fas fa-envelope-open-text" aria-hidden="true"/>
                                    jussi.loppukaarre@gmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
										<i className="fab fa-linkedin-in" aria-hidden="true"/>
                                    Jussi Loppukaarre
									</ListItemContent>
								</ListItem>
							</List>
						</div>
*/