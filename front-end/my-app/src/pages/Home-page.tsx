import React from 'react'
import Navbar from '../components/Navbar/Navbar-elements'
//import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            height: "90vh"
        }}>
            Home Page
            </div>
        {/* <Footer></Footer> */}
        </div>

    )
}

export default Home