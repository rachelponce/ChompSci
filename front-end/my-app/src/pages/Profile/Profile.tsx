import React, { useEffect, useState } from 'react';
import './Profile.css'
import '../../App.css';
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
  <div className='background'>
    <div className='profile'>
        <div className='heading'>My Profile</div>
        <div className='gap'></div>
        <div className='box'>
          <div className='profileData'>
            <div className='profileSpacing'>
              <strong>Name:</strong>{name ? ' ' + name : ' '}
            </div>

            <div className='profileSpacing'>
            <strong>Email:</strong>{email ? ' ' + email : ' '} 
            </div>

            <div className='profileSpacing'>
            <strong>User Type:</strong>{userType ? ' ' + userType : ' '}
            </div> 

            <header className='button'>
              <button className="full-rounded" id="login-button">
              Update Profile
              <div className="border full-rounded"></div>
              </button>
            </header>
          </div>
      </div>
    </div>
  </div>
  );
};


export default Profile
