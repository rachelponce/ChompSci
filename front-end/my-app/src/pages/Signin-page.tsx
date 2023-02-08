import React from 'react'
import Navbar from '../components/Navbar/Navbar-elements'
// import React, { Component } from "react";
import { render } from 'react-dom';
import LoginForm from './LoginForm';
import './signin-style.css';

export const Signin = () => {
  const onSubmitUsername = (username: string, password: string) => alert('Your Username: '+ username +'\nPassword: '+ password);

    return (
        <div>
            <Navbar></Navbar>
            {/* <div style={{
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            height: "90vh"
        }}>Sign-in Page</div> */}
        <header className="Login-header">
          
          <LoginForm onSubmit ={onSubmitUsername} />

      </header>

        {/* <h1> Savannah's code goes here</h1> */}
        </div>

    );
};

render(<Signin />, document.getElementById('root'));



export default SignIn