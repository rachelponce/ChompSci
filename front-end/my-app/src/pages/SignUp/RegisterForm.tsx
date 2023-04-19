import { ClassNames } from '@emotion/react';
import React, { SyntheticEvent, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './signup-style.css';

export const RegisterForm = ({ onSubmit }: {onSubmit:any}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [userType, setUserType] = React.useState('');
  const [error, setError] = React.useState('');


  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    onSubmit(username, password, firstName, lastName);
    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setUserType('');
    setIsDisabled(true);


  // Useful for catching errors in console
  //  console.log({
  //   username,
  //   password
  // }) 

  // Passing variables to backend
   const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        FirstName: firstName,
        LastName: lastName,
        Email: username,
        Password: password,
        UserType: userType
      })
    });

    const content = await response.json();

    console.log(content);

    if (!response.ok) {
      setError("Registration Unsuccessful. Please enter valid user information" )
    }
    else {
      setError('')
    }
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
  const handleChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value as string);
  };
  

  useEffect(() => {
    if (password !== '' && username !== '' && firstName !== '' && lastName !== '' && userType !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, password, firstName, lastName, userType]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="signUpText">
      <div className="header">
        <p>Sign Up:</p>
        </div>
        <div>
          <label htmlFor="first-name">First Name: </label>
          <input
            data-test='first-name-input'
            id="first-name"
            type="text"
            onChange={handleChangeFirstName}
            value={firstName}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name: </label>
          <input
            data-test='last-name-input'
            id="last-name"
            type="text"
            onChange={handleChangeLastName}
            value={lastName}
          />
        </div>
        <label htmlFor="username-input">UF Email: </label>
        <input
          data-test='email-input'
          id="username-input"
          type="text"
          onChange={handleChangeUsername}
          value={username}
        />
      
      <div>
        <label htmlFor="password-input">Password: </label>
        <input
          data-test='password-input'
          id="password-input"
          type="password"
          onChange={handleChangePassword}
          value={password}
        />
        <p></p>
      </div>
      </div>
      <div className="accessType">
        Which best describes you as a user:
        <p></p>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userType}
              label="User Type"
              onChange={handleChange}
            >
              <MenuItem value={1}>Student</MenuItem>
              <MenuItem value={2}>Faculty</MenuItem>
              <MenuItem value={3}>UF Club Board Member</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <p></p>
      </div>
      {error?<label>{error}</label>:null}
      {error?<p></p>:null}
      <header className="button3">
      <button id="login-button" type="submit" disabled={isDisabled} data-test='submit-button'>
        Submit
      </button>
      </header>
    </form>
  );
};

export default RegisterForm;