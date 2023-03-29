import React from 'react'
import Navbar from '../../components/Navbar/Navbar-elements'
import './about-page.css';

const About = () => {
    return (
        <div className='aboutStyle'>
            {/* <Navbar></Navbar> */}
            <div style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            height: "90vh",
            backgroundColor: "#282c34"
        }}>
            <h1>About Page</h1>
            </div>
        </div>

    )
}

export default About
