import { createSlice } from '@reduxjs/toolkit'

const userCreditCard = createSlice({
  name: 'userCreditCard',
  initialState: {
    userCreditCard: null,
  },
  reducers: {
    addUserCreditCard: (state, action) => {
      state.userCreditCard = action.payload
    },
    clearUserCreditCard: (state) => {
      state.userCreditCard = null
    }
  },
})

export const { addUserCreditCard, clearUserCreditCard} = userCreditCard.actions

export default userCreditCard.reducer
