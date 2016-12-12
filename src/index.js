import React from 'react';
import ReactDOM from 'react-dom';
import AdminContainer from './containers/adminContainer';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combinedApp from './reducers/index.js';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import * as usersActions from './actionCreators/usersActions.js';

export const store = createStore(
	combinedApp,
	{},
	applyMiddleware(logger, thunkMiddleware)
);

ReactDOM.render(
  	<div>
  		<Provider store={store}>
  			{() => <AdminContainer store={store} />}
  		</Provider>
  	</div>,
  document.getElementById('root')
);

store.actions = {
	usersActions: bindActionCreators(usersActions, store.dispatch)
};

window.store = store;
