import React from 'react'
import Navbar from '../components/Navbar/Navbar-elements'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            height: "90vh"
        }}>Home Page</div>
        </div>

    )
}

export default Home