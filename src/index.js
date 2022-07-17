import React from 'react';
import ReactDOM from 'react-dom';
import './config'
import './index.css';
import App from './App/App';


// console.log(process.env.API_BASE_URL);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

