import React from 'react'
import Navbar from '../components/Navbar/Navbar-elements'

const SignIn = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            height: "90vh"
        }}>Sign-in Page</div>
        </div>

    )
}

export default SignIn