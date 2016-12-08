import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './containers/loginComponent';
import './index.css';
import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
  <LoginComponent />,
  document.getElementById('root')
);
