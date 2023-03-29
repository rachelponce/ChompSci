import React, { Component, useState } from 'react';
import "./Landing.css"; 
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typewriter from "typewriter-effect"; 
import { Link, BrowserRouter } from 'react-router-dom';

const Landing = () => {
    const [state] = useState ({
        title: "Welcome to ", 
        titleTwo: "chompSci", 
        titleThree: "A place for UF Computer Science ",
        image: "gator.gif"
    }); 

    return(
        <div className="home">
            <div className="home-intro">
                <h2>
                    <div data-testid= "t1" className='title'> {state.title}</div>
                    <div data-testid= "t2" className='titleTwo'> {state.titleTwo}</div>
                    <div data-testid= "t3" className='titleThree'> {state.titleThree}</div>
                </h2>
                <div data-testid="typewriter" className='text'>
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
                {/* <BrowserRouter> For landing page unit tests to work uncomment these two lines  */} 
                <Link to="/home">See what's happening this week. </Link>
                {/* </BrowserRouter> */}
            </div>
            </div>
            <div className='home-image'>
            <img data-testid="pic" src={require('../../images/gator.gif')} alt="gator"/>
            </div>
        </div>
    )
};

export default Landing; 
