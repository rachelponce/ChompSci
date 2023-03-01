import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './signin-style.css';

export const LoginForm = ({ onSubmit }: {onSubmit:any}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    onSubmit(username, password);
    setUsername('');
    setPassword('');
    setIsDisabled(true);
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
        {/* Sign In: */}
        <p>Sign In:</p>
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
      <p></p>
      <header className="newPrompt">
        <Link to="/signup">New? Sign up here!</Link>
      </header>
    </form>
  );
};

export default LoginForm;
