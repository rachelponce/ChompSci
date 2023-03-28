import { ClassNames } from '@emotion/react';
import React, { SyntheticEvent, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './signup-style.css';

export const RegisterForm = ({ onSubmit }: {onSubmit:any}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    onSubmit(username, password, firstName, lastName);
    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setIsDisabled(true);

  // Useful for catching errors in console
  //  console.log({
  //   username,
  //   password
  // }) 

  // Passing username and password to backend
  // Will initially print failing message for Sprint 2 since there are no stored users to sign in 
   const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        FirstName: firstName,
        LastName: lastName,
        Username: username,
        Password: password
      })
    });

    const content = await response.json();

    console.log(content);
  }

  function handleChangeFirstName(event: { target: { value: string};}) {
    setFirstName(event.target.value);
  }
  function handleChangeLastName(event: { target: { value: string};}) {
    setLastName(event.target.value);
  }

  function handleChangeUsername(event: { target: { value: string; }; }) {
    setUsername(event.target.value.toLowerCase());
  }

  function handleChangePassword(event: { target: { value: string; }; }) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if (password !== '' && username !== ''&& firstName !== ''&& lastName !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, password]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="signUpText">
      <div className="header">
        <p>Sign Up:</p>
        </div>
        <div>
          <label htmlFor="first-name">First Name: </label>
          <input
            id="first-name"
            type="text"
            onChange={handleChangeFirstName}
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name: </label>
          <input
            id="last-name"
            type="text"
            onChange={handleChangeLastName}
            value={lastName}
          />
        </div>
        <label htmlFor="username-input">UF Email: </label>
        <input
          id="username-input"
          type="text"
          onChange={handleChangeUsername}
          value={username}
        />
      
      <div>
        <label htmlFor="password-input">Password: </label>
        <input
          id="password-input"
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
        <p></p>
      </div>
      
      <header className="button">
      <button id="login-button" type="submit" disabled={isDisabled}>
        Submit
      </button>
      </header>
      </div>
    </form>
  );
};

export default RegisterForm;