import { combineReducers } from 'redux'
import userLoginInfoReducer from '../features/auth/userLoginInfo'
import userTokenReducer from '../features/auth/userToken'
import shareBillboardInfoReducer from '../features/shareBillboardInfo'
export default combineReducers({
  userLoginInfo: userLoginInfoReducer,
  userToken: userTokenReducer,
  shareBillboardInfo: shareBillboardInfoReducer
})
