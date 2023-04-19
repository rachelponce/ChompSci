import React from 'react'
import "../../App.css"
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Navbar-NotSignedInCSS'

const NavbarSI = () => {
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
                <NavLink to="/opportunities">
                     opportunities
                </NavLink>
                <NavLink to="/user/:userid">
                     profile
                </NavLink>
                <NavBtnLink to="/logout">
                     logout 
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

export default NavbarSI; 

// npm install styled-components
// npm install react-router-dom react-icons
