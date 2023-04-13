import React from 'react'
import "../../App.css"
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './Navbar-NotSignedInCSS'

const NavbarNSI = () => {
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

export default NavbarNSI; 

// npm install styled-components
// npm install react-router-dom react-icons
