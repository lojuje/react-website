import React, {useState} from 'react'
import './../App.css'


const Navbar = () => {
    
    const [click, setClick] = useState(false)
    
    const closeMobileMenu = () => setClick(false)
    const handleClick = () => setClick(!click)

    
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    JJEL <i className='fab fa-firstdraft'/>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='#home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about-section' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='#projects-section' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact-section' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar