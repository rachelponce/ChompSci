import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Navbar-index'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img src={require('../../images/logo3.png')} alt="logo"/>
            </NavLink>
            <Bars /> 
            <NavMenu>
                <NavLink to='/about'>
                     About 
                </NavLink>
                <NavLink to="/calendar">
                     Calendar 
                </NavLink>
                <NavLink to="/tutoring">
                     Tutoring
                </NavLink>
                <NavLink to="/internships">
                     Internships
                </NavLink>
                <NavLink to="/signup">
                     Sign Up 
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">
                     Sign In 
                </NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    )
}

export default Navbar; 

// npm install styled-components
// npm install react-router-dom react-icons
