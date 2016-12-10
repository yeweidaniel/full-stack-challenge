import React from 'react';
import ReactDOM from 'react-dom';
import AdminComponent from './containers/adminComponent';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedApp from './reducers';

let store = createStore(combinedApp)

ReactDOM.render(
  	<div>
  		<Provider store={store}>
  			{() => <AdminComponent store={store} />}
  		</Provider>
  	</div>,
  document.getElementById('root')
);
