import React, { Component, useState } from 'react';
import "./Home-page.css"
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typewriter from "typewriter-effect"; 
var Carousel = require('react-responsive-carousel').Carousel; 

const Home = () => {
    const [state] = useState ({
        title: "Welcome to ", 
        titleTwo: "Chomp-Sci", 
        titleThree: "A place for UF Computer Science ", 
    }); 

    return(
        <div className="home">
            <div className = "home-intro"> 
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
                        "Students", 
                        "Clubs", 
                        "Tutors",
                        "Recruiters",
                        "Professors",
                    ],
                }} />
            </div>
            </div>
        </div>
    )
};

export default Home; 








// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// export default class Home extends Component {
    
//     render() {
//         return (
            // <div style={{
            //     color: "#000", 
            //     paddingTop: "30px",
            //     paddingLeft: "100px",
            //     fontSize: "45px",
            //     fontStyle: "italic",
            // }}> What's New This Week: 
            //     <div className = "carousel">
            // <Carousel showArrows={true} autoplay>
            //     <div>
            //         <img src={require('../Home/home-images/pic1.png')} alt="Photo1" />
            //         <p className="legend">Legend 1</p>
            //     </div>
            //     <div>
            //         <img src={require('../Home/home-images/pic2.png')} alt="Photo2" />
            //         <p className="legend">Legend 2</p>
            //     </div>
            //     <div>
            //         <img src={require('../Home/home-images/pic3.png')} alt="Photo3" />
            //         <p className="legend">Legend 3</p>
            //     </div>
            // </Carousel>
            // </div>
            // </div>
//             <div id="fullpage">
//                 <div className="section">Some section</div>
//                 <div className="section">Some section</div>
//                 <div className="section">Some section</div>
//                 <div className="section">Some section</div>
// </div>
//         );
//     }
// }


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-c