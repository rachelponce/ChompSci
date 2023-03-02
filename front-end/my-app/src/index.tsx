import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
// import Home from './pages/Home-page';
// import About from './pages/About-page';
// import Calendar from './pages/Calendar-page';
// import Internships from './pages/Internships-page';
// import Tutoring from './pages/Tutoring-page';
// import SignIn from './pages/Signin-page';
// import SignUp from './pages/Signup-page';

// const router = createBrowserRouter([
//   {
//     path: "/", 
//     element: <Home />
//   },
//   {
//     path: "/about", 
//     element: <About />
//   },
//   {
//     path: "/calendar", 
//     element: <Calendar />
//   },
//   {
//     path: "/internships", 
//     element: <Internships />
//   },
//   {
//     path: "/tutoring", 
//     element: <Tutoring />
//   },
//   {
//     path: "/signin", 
//     element: <SignIn />
//   },
//   {
//     path: "/signup", 
//     element: <SignUp />
//   },
// ])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);