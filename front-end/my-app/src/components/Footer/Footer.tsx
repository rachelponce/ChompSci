import React from 'react'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Footer/Footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
            <GitHubIcon 
            id="github-button" 
            onClick={() => 
                window.open('https://github.com/rachelponce/ChompSci')}/>
            </div>
            <p> &copy; 2023 Chomp-Sci</p>
        </div>
    )
}

export default Footer; 
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

