import React from 'react';
import {render} from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Calendar from './pages/Calendar/Calendar-page';
import App from "./App"
import reportWebVitals from './other/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);