import { combineReducers } from 'redux'
import userLoginInfoReducer from '../features/auth/userLoginInfo'
import userTokenReducer from '../features/auth/userToken'
export default combineReducers({
  userLoginInfo: userLoginInfoReducer,
  userToken: userTokenReducer,
})
