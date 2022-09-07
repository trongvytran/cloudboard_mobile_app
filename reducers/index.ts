import {combineReducers} from 'redux'
import userLoginInfoReducer from '../features/auth/userLoginInfo'
import shareBillboardInfoReducer from '../features/shareBillboardInfo'
// import likeBillboardInfoReducer from '../features/likeBillboardInfo'
import userCredicardReducer from '../features/userCreditCard'
export default combineReducers({
    userLoginInfo: userLoginInfoReducer,
    shareBillboardInfo: shareBillboardInfoReducer,
    // likeBillboardInfo: likeBillboardInfoReducer  
    userCredicard: userCredicardReducer
})
