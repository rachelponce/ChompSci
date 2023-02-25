import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {

  return (
    <div className = "navbar">
        <div className = "links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/tutoring">Tutoring</Link>
            <Link to="/internships">Internships</Link>
            <Link to="/sign-up">Sign Up</Link>
        </div>
        <div className = "button">
            <Link to="/calendar">Calendar</Link>
        </div>
    </div>
  )
}

export default Navbar
