import React from 'react'
import '../App.css'
import './AnimSection.css'
import video from '../videot/vid4.mp4'

const AnimSection = ()  => {
	return(
		<div className='anim-container'>
			<video src={video} autoPlay loop muted />
		</div>
	)
}

export default AnimSection