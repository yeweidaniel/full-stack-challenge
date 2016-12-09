import { combineReducers } from 'redux'
import users from './usersReducer'

const combinedApp = combineReducers({
  users
})

export default combinedApp
