import React from 'react'
import "../../App.css"
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Navbar-index'

const Navbar = () => {
    return (
     <div className="generalText">
        <>
        <Nav>
            <NavLink to="/home">
                <img src={require('../../images/logo4.png')} alt="logo"/>
            </NavLink>
            <Bars /> 
            <NavMenu>
                <NavLink to='/about'>
                     about 
                </NavLink>
                <NavLink to="/calendar">
                     calendar 
                </NavLink>
                <NavLink to="/tutoring">
                     tutoring
                </NavLink>
                <NavLink to="/internships">
                     internships
                </NavLink>
                <NavLink to="/signup">
                     signUp
                </NavLink>
                <NavBtnLink to="/signin">
                     signIn 
                </NavBtnLink>
            </NavMenu>
            {/* <NavBtn> */}
                {/* <NavBtnLink to="/signin">
                     Sign In 
                </NavBtnLink> */}
            {/* </NavBtn> */}
        </Nav>
        </>
        </div>
    )
}

export default Navbar; 

// npm install styled-components
// npm install react-router-dom react-icons
