import { combineReducers } from 'redux';
import data from './dataReducer';

const combinedApp = combineReducers({
  data
})

export default combinedApp
