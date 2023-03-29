import React from 'react'
import Navbar from '../../components/Navbar/Navbar-elements'
// import React, { Component } from "react";
import { render } from 'react-dom';
import RegisterForm from './RegisterForm';
import './signup-style.css';

export const SignUp = () => {
  const onSubmitUsername = (username: string, password: string) => alert('Email: '+ username +'\nPassword: '+ password);

    return (
        <div>
            <div className="box">
              <header className="SignUp-header">
                <RegisterForm onSubmit ={onSubmitUsername} />
              </header>
            </div>
        </div>
    );
};

export default SignUp;
