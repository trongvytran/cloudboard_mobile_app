import { createSlice } from '@reduxjs/toolkit'

const userCreditCard = createSlice({
  name: 'userCreditCard',
  initialState: {
    userCreditCard: null,
  },
  reducers: {
    adduserCreditCard: (state, action) => {
      state.userCreditCard = action.payload
    },
    clearuserCreditCard: (state) => {
      state.userCreditCard = null
    }
  },
})

export const { adduserCreditCard, clearuserCreditCard} = userCreditCard.actions

export default userCreditCard.reducer
