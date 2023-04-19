import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Typewriter from "typewriter-effect"; 
import { Link, BrowserRouter } from 'react-router-dom';

const Logout = () => {
        window.localStorage.removeItem("isLoggedIn");
        window.location.href = "/";

    return(
        <div>
        </div>
    )
};

export default Logout; 