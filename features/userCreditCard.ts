import { createSlice } from '@reduxjs/toolkit'

const userCreditCard = createSlice({
  name: 'userCreditCard',
  initialState: {
    userCreditCard: [],
  },
  reducers: {
    addUserCreditCard: (state, action) => {
      state.userCreditCard = action.payload
    },
    clearUserCreditCard: (state) => {
      state.userCreditCard = []
    }
  },
})

export const { addUserCreditCard, clearUserCreditCard} = userCreditCard.actions

export default userCreditCard.reducer
