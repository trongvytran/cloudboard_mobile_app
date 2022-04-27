import { combineReducers } from 'redux'
import accessTokenReducer from '../features/auth/accessTokenSlice'

export default combineReducers({
  accessToken: accessTokenReducer,
})
