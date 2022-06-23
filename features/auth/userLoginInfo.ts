import { createSlice } from '@reduxjs/toolkit'

const userLoginInfo = createSlice({
  name: 'userLoginInfo',
  initialState: {
    userLoginInfo: null,
  },
  reducers: {
    addUserLoginInfo: (state, action) => {
      state.userLoginInfo = action.payload
    },
    clearUserLoginInfo: (state) => {
      state.userLoginInfo = null
    }
  },
})


export const { addUserLoginInfo, clearUserLoginInfo } = userLoginInfo.actions

export default userLoginInfo.reducer

