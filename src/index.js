import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './containers/loginComponent';
import './index.css';
// import { Router, Route, Link, browserHistory } from 'react-router'

import { createStore } from 'redux'
import combinedApp from './reducers'
import App from './components/App'

let store = createStore(combinedApp)

ReactDOM.render(
  <LoginComponent />,
  document.getElementById('root')
);
