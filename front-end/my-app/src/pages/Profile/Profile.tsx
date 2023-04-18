import React, { useEffect, useState } from 'react';
import './Profile.css'
import LoginForm from '../SignIn/LoginForm';
import SignIn from '../SignIn/Signin-page';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');

  // http://localhost:3000/api/user/:userid
  // http://localhost:8080/api/user

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:3000/api/user/:userid', {
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        });

        const content = await response.json();

        setName(content.name);
        setEmail(content.email);
        setUserType(content.userType);

      }
    )();
  });


return (
    <div className='profile'>
        <div className='heading'>My Profile</div>

        <p></p>
          {name ? 'Name: ' + name : ' '}
        <p></p>
        
        <p></p>
        {email ? 'Email: ' + email : ' '} 
        <p></p>

        <p></p>
          {userType ? 'User Type: ' + userType : ' '} 
        <p></p>

        <header className='button'>
          <button className="full-rounded" id="login-button">
          Update Profile
          <div className="border full-rounded"></div>
          </button>
        </header>

    </div>
  );
};


export default Profile
