import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // default react App module
import App from './Course 56 - useEffect() Part 2/App' // change this to import own react module
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
