import { createSlice } from '@reduxjs/toolkit'

const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState: {
    accessToken: null,
  },
  reducers: {
    addAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
    clearAccessToken: (state) => {
      state.accessToken = null
    }
  },
})

export const { addAccessToken, clearAccessToken } = accessTokenSlice.actions

export default accessTokenSlice.reducer
