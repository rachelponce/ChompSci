import React from 'react'
import Navbar from '../../components/Navbar/Navbar-NotSignedIn'
// import React, { Component } from "react";
import { render } from 'react-dom';
import {LoginForm} from './LoginForm';
import './signin-style.css';

export const SignIn = () => {
  // need to pass username & password parameters to backend
  const onSubmitUsername = (username: string, password: string) => console.log(username + password);
  
    return (
        <div>
            <div className="box">
              <header className="Login-header">
                <LoginForm onSubmit ={onSubmitUsername} />
              </header>
            </div>
        </div>
    );
};


export default SignIn;