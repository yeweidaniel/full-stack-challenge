import React from 'react';
import ReactDOM from 'react-dom';
import LoginContainer from './containers/loginContainer';
import AdminContainer from './containers/adminContainer';
import EmployeeContainer from './containers/employeeContainer';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import combinedApp from './reducers/index.js';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import * as usersActions from './actionCreators/usersActions.js';
import * as loginActions from './actionCreators/loginActions.js';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

const logger = createLogger();

export const store = createStore(
	combinedApp,
	{},
	applyMiddleware(thunk, apiMiddleware, logger)
);

// bind dispatch action to action creators
store.actions = {
  usersActions: bindActionCreators(usersActions, store.dispatch),
  loginActions: bindActionCreators(loginActions, store.dispatch)
};

//entry point of React, pass in store and routing information
ReactDOM.render(
  	<div>
  		<Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={LoginContainer}>
            <IndexRedirect to="/login" />
            <Route path="login" component={LoginContainer}/>
          </Route>
          <Route path="admin" component={AdminContainer}/>
          <Route path="employee/:id" component={EmployeeContainer}/>
        </Router>
  		</Provider>
  	</div>,
  document.getElementById('root')
);

window.store = store;
