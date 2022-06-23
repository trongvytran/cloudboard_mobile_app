import { createSlice } from '@reduxjs/toolkit'
const userToken = createSlice({
    name: 'userToken',
    initialState: {
      userToken: null,
    },
    reducers: {
      addUserToken: (state, action) => {
        state.userToken = action.payload
      },
      clearUserToken: (state) => {
        state.userToken = null
      }
    },
  })

export const { addUserToken, clearUserToken } = userToken.actions  

export default userToken.reducer