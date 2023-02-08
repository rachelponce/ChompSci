import React from 'react'
import Navbar from '../components/Navbar/Navbar-elements'
// import React, { Component } from "react";
import { render } from 'react-dom';
import LoginForm from './LoginForm';
import './signin-style.css';

export const SignIn = () => {
  const onSubmitUsername = (username: string, password: string) => alert('Your Username: '+ username +'\nPassword: '+ password);

    return (
        <div>
            <Navbar></Navbar>
            
        <header className="Login-header">
          
          <LoginForm onSubmit ={onSubmitUsername} />

      </header>

        </div>

    );
};

// render(<SignIn/>, document.getElementById('root')); //breaks everything for some reason....

export default SignIn;