import { createSlice } from '@reduxjs/toolkit'

const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState: {
    accessToken: '',
  },
  reducers: {
    addAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
  },
})

export const { addAccessToken } = accessTokenSlice.actions

export default accessTokenSlice.reducer
