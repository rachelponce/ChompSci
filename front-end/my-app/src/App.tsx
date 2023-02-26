import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home-page'
import Navbar from './components/Navbar/Navbar-elements';

function App() {
  return (
    <div className="generalText">
    <Router>
      <Navbar />
    </Router>
    </div>
  );
}

export default App; 
