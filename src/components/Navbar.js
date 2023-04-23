import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <nav className='main-nav'>
                {/* logo part */}
                <div className='title'>
                    <h2>
                        Team7Education
                    </h2>
                </div>
                {/* nav links part */}
                <div className='menu-links'>
                    <ul> 
                        <li><a href='#' > Products </a></li>
                        <li><a href='#' > Solutions </a></li>
                        <li><a href='#' > Resources </a></li>
                        <li><a href='#' > Pricing </a></li>
                        <li><a></a></li>
                        <li><a> For Candidates </a></li>
                        <li><a> | </a></li>
                        <li><a href='#' >Request Demo</a></li>
                        <li><a href='#' >Sign up</a></li>
                    </ul>
                </div>
            </nav>
            {/* hero section */}
            <div className='hero-section'>
            <h1> HERO SECTION</h1>
            </div>
        </>
    )
}

export default Navbar