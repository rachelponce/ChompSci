import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home-page'
import About from './pages/About-page'
import Calendar from './pages/Calendar-page';
import Internships from './pages/Internships-page';
import Tutoring from './pages/Tutoring-page';
import SignIn from './pages/Signin-page';
import SignUp from './pages/Signup-page';
import Navbar from './components/Navbar/Navbar-elements';
import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      {/* // Right now app.tsx doesn't do anything, navbar and footer are
      // called within the function of each page 
      // Ex: go to pages/Home-page.tsx to see how navbar and footer are called */}
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
        <Route path="/tutoring" element={ <Tutoring/> }></Route>
        <Route path="/internships" element={ <Internships/> }></Route>
        <Route path="/calendar" element={ <Calendar/> }></Route>
        <Route path="/signin" element={ <SignIn/> }></Route>
        <Route path="/signup" element={ <SignUp/> }></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 
