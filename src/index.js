import React from 'react';
import ReactDOM from 'react-dom';
import LoginContainer from './containers/loginContainer';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import combinedApp from './reducers/index.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as usersActions from './actionCreators/usersActions.js';
import * as loginActions from './actionCreators/loginActions.js';

export const store = createStore(
	combinedApp,
	{},
	applyMiddleware(thunk, logger)
);

ReactDOM.render(
  	<div>
  		<Provider store={store}>
  			<LoginContainer store={store} />
  		</Provider>
  	</div>,
  document.getElementById('root')
);

store.actions = {
	usersActions: bindActionCreators(usersActions, store.dispatch),
  loginActions: bindActionCreators(loginActions, store.dispatch)
};

window.store = store;
