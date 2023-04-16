import React from 'react'
import Navbar from '../../components/Navbar/Navbar-NotSignedIn'
// import React, { Component } from "react";
import { render } from 'react-dom';
import AddEventForm from './AddEventForm';
import './Add-Event.css';

export const AddEvent = () => {
  // need to pass username & password parameters to backend
  const onSubmitEventData= (title: string, date: string) => alert(title + date); 
  
    return (
        <div>
             <AddEventForm onSubmit ={onSubmitEventData} />
        </div>
    );
};

// render(<SignIn/>, document.getElementById('root')); //breaks everything for some reason....

export default AddEvent;