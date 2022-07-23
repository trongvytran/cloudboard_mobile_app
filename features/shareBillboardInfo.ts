import { createSlice } from '@reduxjs/toolkit'
const shareBillboardInfo = createSlice({
  name: 'shareBillboardInfo',
  initialState: {
    shareBillboardInfo: null,
  },
  reducers: {
    addBillboardShareInfo: (state, action) => {
      state.shareBillboardInfo = action.payload
    },
  },
})

export const { addBillboardShareInfo } = shareBillboardInfo.actions

export default shareBillboardInfo.reducer
