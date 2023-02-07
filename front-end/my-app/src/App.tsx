import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar/NavbarElements';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App; 
