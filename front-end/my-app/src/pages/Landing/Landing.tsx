import React, { Component, useState } from 'react';
import "./Landing.css"; 
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typewriter from "typewriter-effect"; 
import { Link } from 'react-router-dom';

const Landing = () => {
    const [state] = useState ({
        title: "Welcome to ", 
        titleTwo: "chompSci", 
        titleThree: "A place for UF Computer Science ",
        image: "gator.gif"
    }); 

    return(
        <>
        <div className="home">
            <div className="home-intro">
                <h2>
                    <div className='title'> {state.title}</div>
                    <div className='titleTwo'> {state.titleTwo}</div>
                    <div className='titleThree'> {state.titleThree}</div>
                </h2>
                <div className='text'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "students",
                                "clubs",
                                "tutors",
                                "recruiters",
                                "professors",
                                "organizations"
                            ],
                        }} />
                </div>
            <div className='small-text'>
                <p></p>
            <Link to="/home">See what's happening this week. </Link>
            </div>
            </div>
            <div className='home-image'>
            <img src={require('../../images/gator.gif')} alt="gator"/>
            </div>
        </div>
        </>
    )
};

export default Landing; 
