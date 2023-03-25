import React, { SyntheticEvent, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './signup-style.css';

export const RegisterForm = ({ onSubmit }: {onSubmit:any}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    onSubmit(username, password);
    setUsername('');
    setPassword('');
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
        Username: username,
        Password: password
      })
    });

    const content = await response.json();

    console.log(content);
  }

  function handleChangeUsername(event: { target: { value: string; }; }) {
    setUsername(event.target.value.toLowerCase());
  }

  function handleChangePassword(event: { target: { value: string; }; }) {
    setPassword(event.target.value.toLowerCase());
  }

  useEffect(() => {
    if (password !== '' && username !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, password]);

  return (
    //formatting of login page: username/input box,password/input box, button
    <form onSubmit={handleSubmit}>
      <div>
      <div className="header">
        {/* Sign Up: */}
        <p>Sign Up:</p>
        </div>
        <label htmlFor="username-input">UF Email: </label>
        <input
          id="username-input"
          type="text"
          onChange={handleChangeUsername}
          value={username}
        />
      </div>
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
    </form>
  );
};

export default RegisterForm;