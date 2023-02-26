import React from 'react'
import Navbar from '../components/Navbar/Navbar-elements'
// import React, { Component } from "react";
import { render } from 'react-dom';
import LoginForm from './LoginForm';
import './signin-style.css';

export const SignIn = () => {
  // need to pass username & password parameters to backend
  const onSubmitUsername = (username: string, password: string) => alert('Your Username: '+ username +'\nPassword: '+ password);

    return (
        <div>
            <Navbar></Navbar> 
            <div className="box">
              <header className="Login-header">
                <LoginForm onSubmit ={onSubmitUsername} />
              </header>
            </div>
        </div>
    );
};

// render(<SignIn/>, document.getElementById('root')); //breaks everything for some reason....

export default SignIn;