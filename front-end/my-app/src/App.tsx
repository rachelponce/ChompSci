import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home-page'
import About from './pages/About/About-page'
import Calendar from './pages/Calendar/Calendar-page';
import Internships from './pages/Internships/Internships-page';
import Tutoring from './pages/Tutoring/Tutoring-page';
import SignIn from './pages/SignIn/Signin-page';
import SignUp from './pages/SignUp/Signup-page';
import Landing from './pages/Landing/Landing'
import Navbar from './components/Navbar/Navbar-elements';
import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="generalText">
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={ <Landing/> }></Route>
        <Route path="/home" element={ <Home/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
        <Route path="/tutoring" element={ <Tutoring/> }></Route>
        <Route path="/internships" element={ <Internships/> }></Route>
        <Route path="/calendar" element={ <Calendar/> }></Route>
        <Route path="/signin" element={ <SignIn/> }></Route>
        <Route path="/signup" element={ <SignUp/> }></Route>
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

