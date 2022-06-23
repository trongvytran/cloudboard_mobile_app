import { combineReducers } from 'redux'
import userLoginInfoReducer from '../features/auth/userLoginInfo'
import userTokenReducer from '../features/auth/userLoginInfo'

export default combineReducers({
  userLoginInfo: userLoginInfoReducer,
  userToken: userTokenReducer,
})
