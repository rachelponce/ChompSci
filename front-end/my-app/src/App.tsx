import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home-page'
import About from './pages/About/About-page'
// import Calendar from './pages/Calendar/Calendar-page';
import Events from './pages/Calendar/test';
import Opportunities from './pages/Opportunities/Opportunities-page';
import SignIn from './pages/SignIn/Signin-page';
import SignUp from './pages/SignUp/Signup-page';
import Landing from './pages/Landing/Landing'
import NavbarNSI from './components/Navbar/Navbar-NotSignedIn';
import NavbarSI from './components/Navbar/Navbar-SignedIn';
import Footer from './components/Footer/Footer'
import Profile from './pages/Profile/Profile';
import Logout from './pages/Logout/Logout';
// import AddEvent from './pages/Calendar/Add-Event';
// import Navbar from './components/Navbar/Navbar'

function App() {
  //var loginFormVar = require("./pages/SignIn/LoginForm")
  //var signedIn1 = loginFormVar.signedIn; 

  // This will detect if user is signed in to determine what navigation bar to display
  var signedIn = window.localStorage.getItem("isLoggedIn");

  console.log("signed in status: " + signedIn)
  return (
    <div className="generalText">
    <Router>
      {signedIn?<NavbarSI/>:<NavbarNSI />} 
      <Routes>
        <Route path="/" element={ <Landing/> }></Route>
        <Route path="/home" element={ <Home/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
        <Route path="/opportunities" element={ <Opportunities/> }></Route>
        <Route path="/calendar" element={ <Events/> }></Route>
        <Route path="/signin" element={ <SignIn/> }></Route>
        <Route path="/signup" element={ <SignUp/> }></Route>
        <Route path="/user/:userid" element={ <Profile/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App; 
// NOTE: read package.json to make sure everything is installed
// jest version shoudl be "ts-jest": "^29.0.5",
// npm i jest @types/jest ts-jest typescript -D
// npm install --save-dev jest  
// npm install --save-dev @babel/preset-typescript

