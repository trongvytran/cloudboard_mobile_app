import { combineReducers } from 'redux'
import userLoginInfoReducer from '../features/auth/userLoginInfo'
import userTokenReducer from '../features/auth/userToken'
import shareBillboardInfoReducer from '../features/shareBillboardInfo'
// import likeBillboardInfoReducer from '../features/likeBillboardInfo'
export default combineReducers({
  userLoginInfo: userLoginInfoReducer,
  userToken: userTokenReducer,
  shareBillboardInfo: shareBillboardInfoReducer,
  // likeBillboardInfo: likeBillboardInfoReducer
})
