import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar-NotSignedIn'
import './about-page.css';
import '../../App.css';
import Sav from './../../images/savannahAvatar.png';


const About = () => {
    return (
        
        <div className='background'>
            <div className='aboutStyle'>
                <h1>About Us</h1>
                <div className='gap'></div>
            </div>
            <div className='paragraphDiv'>
            <div className='aboutParagraph' data-test='about-paragraph'>Our team of software engineers has worked 
            diligently to develop a platform that contains the most relevant information, 
            events, and opportunities in the UF computer science community. </div>
            </div>
            <div className='gap'></div>
            <div className='aboutStyle'>
                <h2>Meet the Team!</h2>
                <div className='gap'></div>
            </div>

            <div className='teammates'>
                <img src={require('../../images/savannahAvatar.png')} alt="logo" height='250' />
                <div>
                    <h3>Savannah Fletcher</h3>
                    <h5>Front-end Developer</h5>
                    <div>savannahfletcher@ufl.edu</div>
                    <div>Class of 2025</div>
                </div>
                <div className='gap2'></div>
                <img src={require('../../images/maddieAvatar.png')} alt="logo" height='250' />
                <div>
                    <h3>Madeleine Glaum</h3>
                    <h5>Front-end Developer</h5>
                    <div>m.glaum@ufl.edu</div>
                    Class of 2025
                </div>
            </div>
            <div className='gap'></div>
            <div className='teammates'>
                
                <img src={require('../../images/rachelAvatar.png')} alt="logo" height='250' />
                <div>
                    <h3>Rachel Ponce</h3>
                    <h5>Back-end Developer</h5>
                    <div>rachel.ponce@ufl.edu</div>
                    <div>Class of 2025</div>
                </div>
                <div className='gap2'></div>
                <img src={require('../../images/lilyAvatar.png')} alt="logo" height='250' />
                <div>
                    <h3>Lily Cabrera</h3>
                    <h5>Back-end Developer</h5>
                    <div>lilycabrera@ufl.edu</div>
                    <div>Class of 2024</div>
                </div>
            </div>
            <div className='gap'></div>
        </div>
    )
}

export default About
