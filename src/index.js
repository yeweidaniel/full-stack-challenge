import React from 'react';
import ReactDOM from 'react-dom';
import LoginContainer from './containers/loginContainer';
import AdminContainer from './containers/adminContainer';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import combinedApp from './reducers/index.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as usersActions from './actionCreators/usersActions.js';
import * as loginActions from './actionCreators/loginActions.js';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

export const store = createStore(
	combinedApp,
	{},
	applyMiddleware(thunk, logger)
);

ReactDOM.render(
  	<div>
  		<Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={LoginContainer}>
            <IndexRedirect to="/login" />
            <Route path="login" component={LoginContainer}/>
            <Route path="admin" component={AdminContainer}/>
          </Route>
        </Router>
  		</Provider>
  	</div>,
  document.getElementById('root')
);

store.actions = {
	usersActions: bindActionCreators(usersActions, store.dispatch),
  loginActions: bindActionCreators(loginActions, store.dispatch)
};

window.store = store;
