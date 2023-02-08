
import React, { Component } from "react";
import { render } from 'react-dom';
import LoginForm from './LoginForm';
import './signin-style.css';


export const Signin = () => {
  const onSubmitUsername = (username: string, password: string) => alert('Your Username: '+ username +'\nPassword: '+ password);
  
  return (
    <div>
      <header className="Login-header">
          
          <LoginForm onSubmit ={onSubmitUsername} />

      </header>
    </div>
  );
};

render(<Signin />, document.getElementById('root'));

export default Signin;