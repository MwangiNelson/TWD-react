import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Body from './components/body';
import 'bootstrap/dist/css/bootstrap.css';
import { LoginForm } from './components/loginForm';
import 'font-awesome/css/font-awesome.css';
import '@fortawesome/fontawesome-svg-core';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>

   <App />

 
  </React.StrictMode>,

  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
